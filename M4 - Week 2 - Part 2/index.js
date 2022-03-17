const containerDiv = document.querySelector(".displayCards")
const url = "https://striveschool-api.herokuapp.com/books"

const loadBooks = () => {

fetch(url)
.then(responseBooks => responseBooks.json())
.then(booksData => {

    containerDiv.innerHTML = booksData.map( (books) => `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" style="color: black">
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <div class="card" style="height: 100%">
        <img src="${books.img}" class="img-fluid img-thumbnail" alt="..." style="height: 100%">
        <div class="card-body" style="height: 100%">
        <h5 class="card-title">${books.title}</h5>
        <p>${books.price}</p> 
        <button class="btn btn-primary btn-modal" data-toggle="modal" data-target="#exampleModal">View</button>
        <button class="btn btn-primary btn-skip">Skip</button>
      </div>
    <div class="card-footer" style="height: 100%">
      <small class="text-muted">Category: ${books.category.toUpperCase()}</small>
    </div>
  </div>
  </div>
  </div>
  </div>
        `
    ).join(" ")

    const btnSkip = document.querySelectorAll(".btn-skip");

        btnSkip.forEach((buttonSkip) => {
            buttonSkip.addEventListener("click", () => {
                buttonSkip.closest(".col-md-4").remove();
        });
      });
})
.catch(error => console.log(error))
}

const inputSearch = (bookValue) => {
    const inputSearchBooks = document.querySelector(".displayBooks")
    const inputValue = bookValue.target.value

    fetch(url)
    .then(responseBooks => responseBooks.json())
    .then(booksData => {

        inputSearchBooks.innerHTML = booksData.filter(books => books.title.toLowerCase().includes(inputValue.toLowerCase()))
    .map( (books) => `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" style="color: black">
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <div class="card" style="height: 100%">
        <img src="${books.img}" class="img-fluid img-thumbnail" alt="..." style="height: 100%">
        <div class="card-body" style="height: 100%">
        <h5 class="card-title">${books.title}</h5>
        <p>${books.price}</p> 
        <button class="btn btn-primary btn-modal" data-toggle="modal" data-target="#exampleModal">View</button>
        <button class="btn btn-primary btn-skip">Skip</button>
      </div>
    <div class="card-footer" style="height: 100%">
      <small class="text-muted">Category: ${books.category.toUpperCase()}</small>
    </div>
  </div>
  </div>
  </div>
  </div>
        `
    ).join(" ")
    })
    .catch(error => console.log(error))
}

window.onload = () => {
    loadBooks()
    document.querySelector("#inputSearchBooks").addEventListener("change", inputSearch)
}