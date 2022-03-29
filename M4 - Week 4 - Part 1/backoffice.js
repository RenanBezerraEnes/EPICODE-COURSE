const getProductsData = async () => {
    
    const createNewProducts = {
        
    }


    
    try {
        const myProducts = fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: 'POST',
            body: JSON.stringify(myNewProducts),
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMWRiNGRhMTNhZjAwMTUyYzFjNWQiLCJpYXQiOjE2NDg1MDAxNDksImV4cCI6MTY0OTcwOTc0OX0.04_ArG8vkOKBaC7uqVG554vt1Xm8JTqqw0vSCBx2QnU"
        }
        })

        console.log(myProducts)

    } catch (error) {
        alert("ERROR", error)
    }
}

window.onload = async () => {
    
}