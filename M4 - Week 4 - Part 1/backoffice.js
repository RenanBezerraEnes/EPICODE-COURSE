const getNewProducts = async (event) => {
    

    event.preventDefault()


    const createNewProducts = {
        name: document.querySelector("#name-input").value,
        description: document.querySelector("#description-input").value,
        brand: document.querySelector("#brand-input").value,
        imageUrl: document.querySelector("#image-input").value,
        price: document.querySelector("#price-input").value,
    }

    console.log(createNewProducts)

    
    try {
        const myProducts = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: 'POST',
            body: JSON.stringify(createNewProducts),
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NDg1MDAxNDksImV4cCI6MTY0OTcwOTc0OX0.04_ArG8vkOKBaC7uqVG554vt1Xm8JTqqw0vSCBx2QnU",
            'Content-type':'application/json',
        },
      }
    )

    if (myProducts.ok) {
        
        alert("Application Done")

        document.querySelector("#name-input").value = ''
        document.querySelector("#description-input").value = ''
        document.querySelector("#brand-inpu").value = ''
        document.querySelector("#image-input").value = ''
        document.querySelector("#price-input").value = ''
    } else {
        alert("We have a problem, Try Again")
    }

    } catch (error) {
        console.log(error)
    }
}
