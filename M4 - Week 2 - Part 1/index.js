const loadImages = document.querySelector("#loadImages");
const password = "563492ad6f9170000100000175681c8999154aaaac8307cf3d6bad89";
const rowCards = document.querySelector("#row-cards");

//****************************************** First Button Load Images *********************************************
loadImages.addEventListener("click", () => {
  const url = "https://api.pexels.com/v1/search?query=computers";

  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      console.log(dataImg.photos);

      //****************************************** DOM MANIPULATION *****************************************************

      rowCards.innerHTML = dataImg.photos
        .map(
          (img) => `
      <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
      <div class="card" style="height: 100%">
          <img src="${img.src.original}" class="img-fluid img-thumbnail mt-1" alt="...">
          <div class="card-body" style="height: 100%">
          <h5 class="card-title">${img.alt}</h5>
          <button class="btn btn-primary btn-modal" data-toggle="modal" data-target="#exampleModal" onclick="changeImg('${img.src.small}')">View</button>
          <button class="btn btn-primary btn-hide">Hide</button>
        </div>
      <div class="card-footer" style="height: 100%">
        <small class="text-muted">${img.id}</small>
      </div>
    </div>
    </div>
    </div>
        `
        )
        .join("");

      //************************************* BUTTON HIDE ****************************************************************
      const btnHide = document.querySelectorAll(".btn-hide");

      btnHide.forEach((button) => {
        button.addEventListener("click", () => {
          console.log(button);
          button.closest(".col-md-4").classList.add("d-none");
        });
      });
    })
    .catch((error) => alert("Invalid Page ", error));
});

//************************************** Second Button Load Images ***************************************************

const loadSecondImages = document.querySelector("#loadSecondaryImages");

loadSecondImages.addEventListener("click", () => {
  const url = "https://api.pexels.com/v1/search?query=cars";

  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      console.log(dataImg.photos);

      rowCards.innerHTML = dataImg.photos
        .map(
          (img) => `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <div class="card" style="height: 100%">
            <img src="${img.src.original}" class="img-fluid img-thumbnail mt-1" alt="...">
            <div class="card-body" style="height: 100%">
            <h5 class="card-title">${img.alt}</h5>
            <button class="btn btn-primary btn-modal" data-toggle="modal" data-target="#exampleModal" onclick="changeImg('${img.src.small}')">View</button>
            <button class="btn btn-primary btn-hide">Hide</button>
          </div>
        <div class="card-footer" style="height: 100%">
          <small class="text-muted">${img.id}</small>
        </div>
      </div>
      </div>
      </div>
        `
        )
        .join("");

      //********************************************* HIDE BUTTON ****************************************************************

      const btnHide = document.querySelectorAll(".btn-hide");

      btnHide.forEach((button) => {
        button.addEventListener("click", () => {
          button.closest(".col-md-4").classList.add("d-none");
        });
      });
    })
    .catch((error) => alert("Invalid Page ", error));
});

//********************************************* INPUT SEARCH ****************************************************************

const search = (event) => {
  const url = "https://api.pexels.com/v1/search?query=cars";
  const url2 = "https://api.pexels.com/v1/search?query=computers";

  const searchInput = document.querySelector(".displayImgs");
  const value = event.target.value;
  // console.log(value)

  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      searchInput.innerHTML = dataImg.photos
        .filter((img) => img.alt.toLowerCase().includes(value.toLowerCase()))
        .map(
          (img) => `
        <img src="${img.src.original}" class="img-fluid img-thumbnail mt-1" alt="...">
        `
        )
        .join("");
    })
    .catch((error) => alert("Invalid Page ", error));

  fetch(url2, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      searchInput.innerHTML = dataImg.photos
        .filter((img) => img.alt.toLowerCase().includes(value.toLowerCase()))
        .map(
          (img) => `
        <img src="${img.src.original}" class="img-fluid img-thumbnail mt-1" alt="...">
        `
        )
        .join("");
    })
    .catch((error) => alert("Invalid Page ", error));
};

//*************************************************** CAROUSEL ************************************************************

const carouselImg = () => {
  const carouselImg = document.querySelector(".carousel");
  const url = "https://api.pexels.com/v1/search?query=trees";

  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      // carousel innerHTML = // your carousel html

      // const innerCarousel = carousel.querySelector('.carousel-inner')

      carouselImg.innerHTML = `
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>
        `;

      const carouselInner = document.querySelector(".carousel-inner");

      carouselInner.innerHTML = dataImg.photos
        .map(
          (img) => `
          <div class="carousel-item">
            <img src="${img.src.medium}" class="d-block w-100" alt="...">
          </div>
          `
        )
        .join("");
      const carouselItem = document.querySelector(".carousel-item");

      carouselItem.classList.add("active");
    })

    .catch((error) => alert("Invalid Page ", error));
};

//************************************* BUTTON VIEW ****************************************************************

const changeImg = (img) => {
  const imgInModal = document.querySelector("#imgModal")

  imgInModal.src= img;
}

//************************************* DISPLAY URL ****************************************************************

const displayUrl = () => {
  const url = "https://api.pexels.com/v1/search?query=trees";
  const url2 = "https://api.pexels.com/v1/search?query=computers";
  const url3 = "https://api.pexels.com/v1/search?query=cars"

  // Tress
  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseUrl) => responseUrl.json())
    .then((dataImgUrl) => {

      dataImgUrl.photos.map((img) => {
        console.log(img.url)
      })
    })

    .catch((error) => alert("Invalid Page ", error));

    // Computers
    fetch(url2, {
      headers: {
        Authorization: password,
      },
    })
      .then((responseUrl) => responseUrl.json())
      .then((dataImgUrl) => {
  
        dataImgUrl.photos.map((img) => {
          console.log(img.url)
        })
      })
  
      .catch((error) => alert("Invalid Page ", error));
  
      // Cars
      fetch(url3, {
        headers: {
          Authorization: password,
        },
      })
        .then((responseUrl) => responseUrl.json())
        .then((dataImgUrl) => {
          dataImgUrl.photos.map((img) => {
            console.log([img.url])
          })
        })
    
        .catch((error) => alert("Invalid Page ", error));
}

const filterAuthor = (favorite) => {
  const url = "https://api.pexels.com/v1/search?query=computers"
  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseUrl) => responseUrl.json())
    .then((dataImgUrl) => {
      console.log(dataImgUrl.photos.filter((img) => img.photographer.toLowerCase() === favorite.toLowerCase()))
    })

    .catch((error) => alert("Invalid Page ", error));

}



window.onload = () => {
  document.querySelector("input").addEventListener("change", search);
  carouselImg();
};
