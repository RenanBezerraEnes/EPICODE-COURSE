const containerDiv = document.querySelector(".displayCards");
const url = "https://striveschool-api.herokuapp.com/books";
let books = []
let cart =[]


// ************************************************** LoadBooks **********************************************************
const loadBooks = () => {
  fetch(url)
    .then((responseBooks) => responseBooks.json())
    .then((booksData) => {
      books = booksData
      containerDiv.innerHTML = booksData
        .map(
          (books) => `
    <div class="col-md-4" id="${books.asin}">
    <div class="card mb-4 shadow-sm">
    <div class="card" style="height: 100%">
        <img src="${
          books.img
        }" class="img-fluid img-thumbnail" alt="..." style="height: 100%">
        <div class="card-body" style="height: 100%">
        <h5 class="card-title">${books.title}</h5>
        <p><scan>&#8364</scan>${books.price}</p> 
        <button onclick="addToCart('${books.asin}')" class="btn btn-primary border-0 btn-add" style="background-color: #0D101A; border-radius: 50px;" data-toggle="modal" data-target="#exampleModal">Add Cart</button>
        <button class="btn btn-primary border-0 btn-skip" style="background-color: #0D101A; border-radius: 50px;">Skip</button>
      </div>
    <div class="card-footer" style="height: 100%">
      <small class="text-muted">Category: ${books.category.toUpperCase()}</small>
    </div>
  </div>
  </div>
  </div>
        `
        )
        .join(" ");

      const btnSkip = document.querySelectorAll(".btn-skip");

      btnSkip.forEach((buttonSkip) => {
        buttonSkip.addEventListener("click", () => {
          buttonSkip.closest(".col-md-4").remove();
        });
      });  
    })
    .catch((error) => console.log(error));
};

const addToCart = (asin) => {
  
  const bookToAdd = books.find(book => book.asin === asin)
  cart.push(bookToAdd)
  displayCart()
}

const displayCart = () => {
  const cartList = document.querySelector("#booksList")

  cartList.innerHTML = cart.map((cart) =>`
  <div class="col-md-4" style="color: black;">
  <div class="card mb-4 shadow-sm">
  <div class="card" style="height: 100%">
      <img src="${
        cart.img
      }" class="img-fluid img-thumbnail" alt="..." style="height: 100%">
      <div class="card-body" style="height: 100%">
      <h5 class="card-title">${cart.title}</h5>
      <p><scan>&#8364</scan>${cart.price}</p> 
      <button class="btn btn-primary border-0 btn-add" style="background-color: #0D101A; border-radius: 50px;">Add Cart</button>
      <button class="btn btn-primary border-0 btn-skip" style="background-color: #0D101A; border-radius: 50px;">Skip</button>
    </div>
  <div class="card-footer" style="height: 100%">
    <small class="text-muted">Category: ${cart.category}</small>
  </div>
</div>
</div>
</div>
  `
  ).join(" ")
}
// ************************************************** DELETE ITEMS IN THE MODAL CART ****************************************

const deleteBtn = () => {

  const deleteBtn = document.querySelector("#deleteBtn")

  deleteBtn.addEventListener("click", () => {
    cart.map((cart) => {
      cart.remove()
    })
  })
}

// ************************************************** INPUT SEARCH **********************************************************
const inputSearch = (bookValue) => {
  const inputSearchBooks = document.querySelector(".displayBooks");
  const inputValue = bookValue.target.value;

  fetch(url)
    .then((responseBooks) => responseBooks.json())
    .then((booksData) => {
      inputSearchBooks.innerHTML = booksData
        .filter((books) =>
          books.title.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map(
          (books) => `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <div class="card" style="height: 100%">
        <img src="${
          books.img
        }" class="img-fluid img-thumbnail" alt="..." style="height: 100%">
        <div class="card-body" style="height: 100%">
        <h5 class="card-title">${books.title}</h5>
        <p>$${books.price}</p> 
        <button class="btn btn-primary border-0 btn-add" style="background-color: #0D101A; border-radius: 50px;">Add Cart</button>
        <button class="btn btn-primary border-0 btn-skip" style="background-color: #0D101A; border-radius: 50px;">Skip</button>
      </div>
    <div class="card-footer" style="height: 100%">
      <small class="text-muted">Category: ${books.category.toUpperCase()}</small>
    </div>
  </div>
  </div>
  </div>
        `
        )
        .join(" ");

      const btnSkip = document.querySelectorAll(".btn-skip");

      btnSkip.forEach((buttonSkip) => {
        buttonSkip.addEventListener("click", () => {
          buttonSkip.closest(".col-md-4").remove();
        });
      });

      const addButtons = document.querySelectorAll(".btn-add");

      addButtons.forEach((addButtonCart) => {
        addButtonCart.addEventListener("click", () => {
          console.log("BUTTON WORK");
        });
      });
    })
    .catch((error) => console.log(error));
};


window.onload = () => {
  loadBooks();
  document.querySelector("#inputSearchBooks").addEventListener("change", inputSearch);
};
