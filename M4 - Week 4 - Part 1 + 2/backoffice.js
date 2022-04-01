const eventId = new URLSearchParams(window.location.search).get("eventId");

const getNewProducts = async (event) => {
  event.preventDefault();

  const createNewProducts = {
    name: document.querySelector("#name-input").value,
    description: document.querySelector("#description-input").value,
    brand: document.querySelector("#brand-input").value,
    imageUrl: document.querySelector("#image-input").value,
    price: document.querySelector("#price-input").value,
  };

  console.log(createNewProducts);

  try {
    const myProducts = await fetch(
      eventId
        ? "https://striveschool-api.herokuapp.com/api/product/" + eventId
        : "https://striveschool-api.herokuapp.com/api/product/",
      {
        method: eventId ? "PUT" : "POST",
        body: JSON.stringify(createNewProducts),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NDg1MDAxNDksImV4cCI6MTY0OTcwOTc0OX0.04_ArG8vkOKBaC7uqVG554vt1Xm8JTqqw0vSCBx2QnU",
          "Content-type": "application/json",
        },
      }
    );

    if (myProducts.ok) {
      alert(`Application Done ${eventId ? "UPDATE" : "PRODUCT ADD"}`);

      document.querySelector("#name-input").value = "";
      document.querySelector("#description-input").value = "";
      document.querySelector("#brand-inpu").value = "";
      document.querySelector("#image-input").value = "";
      document.querySelector("#price-input").value = "";
    } else {
      alert("We have a problem, Try Again");
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchDetails = async () => {
  spinnerToggle()
  try {
    let idFetch = await fetch(
      'https://striveschool-api.herokuapp.com/api/product/' + eventId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NDg1MDAxNDksImV4cCI6MTY0OTcwOTc0OX0.04_ArG8vkOKBaC7uqVG554vt1Xm8JTqqw0vSCBx2QnU",
          "Content-type": "application/json",
        },
      }
      
    )
    console.log(idFetch)

    if (idFetch.ok) {
      let fetchDetails = await idFetch.json()
      console.log(fetchDetails)

      document.querySelector("#name-input").value = fetchDetails.name
      document.querySelector("#description-input").value = fetchDetails.description
      document.querySelector("#brand-input").value = fetchDetails.brand
      document.querySelector("#image-input").value = fetchDetails.imageUrl
      document.querySelector("#price-input").value = fetchDetails.price

      spinnerToggle()

    } else {
      alert("SOMETHING WENT WRONG")
      spinnerToggle()
    }

  } catch (error) {
    console.log(error)
    spinnerToggle()
  }
}

const deleteButton = async () => {
  try {
    let responseData = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/" + eventId,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NDg1MDAxNDksImV4cCI6MTY0OTcwOTc0OX0.04_ArG8vkOKBaC7uqVG554vt1Xm8JTqqw0vSCBx2QnU",
          "Content-type": "application/json",
        },
      }
      
    );

    if (responseData.ok) {
      alert("product removed")
      window.location.assign("./index.html")

    } else {
      alert("Something is wrong, TRY AGAIN!")

    }

  } catch (error) {
    console.log(error);
  }
};

const deleteButtonToggle = () => {
  let deleteButton = document.querySelector("#delete-button");
  deleteButton.classList.toggle("d-none");
};

const spinnerToggle = () => {
  const spinner = document.querySelector("#spinner");
  spinner.classList.toggle("d-none");
};

const changeButtonText = () => {
  let label = eventId ? "UPDATE" : "CREATE";
  document.querySelector("#submitOrUpdateButton").innerText = label;
};

window.onload = () => {
  console.log(eventId);

  changeButtonText();

  if (eventId) {
    fetchDetails(eventId);
    deleteButtonToggle();
  }
};
