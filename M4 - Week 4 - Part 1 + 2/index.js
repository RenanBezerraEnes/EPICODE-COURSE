const getData = async () => {
    try {
        const myProducts = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NDg1MDAxNDksImV4cCI6MTY0OTcwOTc0OX0.04_ArG8vkOKBaC7uqVG554vt1Xm8JTqqw0vSCBx2QnU"
        }
        })

        if(myProducts.ok) {
            let products = await myProducts.json()
            console.log(products)
            return products
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
}

const createProducts = (products) => {
    const container = document.querySelector(".container")

    container.innerHTML = products.map((products) => `
    <div class="card mt-5">
    <a href="./backoffice.html?eventId=${products._id}">
    <img src="${products.imageUrl}" class="img-fluid text-center" alt="..." style="width: 100px"
    <div class="card-body">
      <h5 class="card-title">${products.brand}</h5>
      <p class="card-text">${products.name}</p>
      <p class="card-text">${products.description}</p>
      <p class="card-text">${products.price}</p>
    </div>
    </a>
  </div>
    `).join(" ")
}

window.onload = async () => {
   let products = await getData()
   console.log("done", products)
   createProducts(products)
}