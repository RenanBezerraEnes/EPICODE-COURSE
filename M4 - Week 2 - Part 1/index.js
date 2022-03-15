const loadImages = document.querySelector("#loadImages");
const password = "563492ad6f9170000100000175681c8999154aaaac8307cf3d6bad89";

// First Button Load Images
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

      // DOM MANIPULATION

      loadImages.innerHTML = dataImg.photos
        .map(
          (img) => `
        <img src="${img.src.original}" class="img-fluid img-thumbnail mt-1" alt="...">
        `
        )
        .join("");
    })
    .catch((error) => alert("Invalid Page ", error));
});

// Second Button Load Images

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

      loadSecondImages.innerHTML = dataImg.photos.map(
        (img) => `
        <img src="${img.src.original}" class="img-fluid img-thumbnail mt-1" alt="...">
        `
      );
    })
    .catch((error) => alert("Invalid Page ", error));
});

// HIDE BUTTON

// const btnHide = document.querySelectorAll(".btn-hide")

// btnHide.addEventListener("click", () => {
//     const svg = document.querySelectorAll("rect")
//     console.log(svg)
//     svg.forEach(element => {
//         element.classList.add("d-none");
//     });
// })

const small = document.querySelectorAll("small");

const replace9mins = () => {
  const url = "https://api.pexels.com/v1/search?query=cars";

  fetch(url, {
    headers: {
      Authorization: password,
    },
  })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      small.forEach((element) => {
        element.innerHTML = dataImg.photos.map(
          (obj) => `
            <small class="text-muted">${obj.id}<small>
        `
        );
      });
    })
    .catch((error) => alert("Invalid Page ", error));
};

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
      console.log(dataImg.photos);

      carouselImg.innerHTML = dataImg.photos.map(
        (img) => `
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${img.src.original}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${img.src.original[img]}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${img.src.original[img]}" class="d-block w-100" alt="...">
        </div>
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
        `
      ).join("")
    })
    .catch((error) => alert("Invalid Page ", error));
};

window.onload = () => {
  replace9mins();
  document.querySelector("input").addEventListener("change", search);
  carouselImg();
};
