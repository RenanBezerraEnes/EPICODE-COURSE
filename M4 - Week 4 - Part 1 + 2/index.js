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

    container.innerHTML = products.map((product) => `
    <div class="card mt-5">
    <a href="./backoffice.html?eventId=${product._id}">
    <img src="${product.imageUrl}" class="img-fluid text-center" alt="..." style="width: 100px"  </a>
    <div class="card-body">
      <h5 class="card-title">${product.brand}</h5>
      <p class="card-text">${product.name}</p>
      <p class="card-text">${product.description}</p>
      <p class="card-text">${product.price}</p>
     <a href="./details.html?eventId=${product._id}" > <button class="btn btn-primary" id="detailsButton">Details</button><a/>
    </div>
  
  </div>
    `).join(" ")
}

window.onload = async () => {
   let products = await getData()
   console.log("done", products)
   createProducts(products)
}