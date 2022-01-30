function titlePage() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Amazon fake";
}

function backgroundPage() {
  const bodyPage = document.querySelector("body");
  document.body.style.backgroundColor = "red";
}

function footerAddress() {
  const footer = document.querySelector("footer");
  footer.innerText = "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France";
}
function AddLinks() {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("linksClasses");
  } 
}

function imageTablejs() {
    const imagetable = document.querySelectorAll("img")
    for (let i = 0; i < imagetable.length; i++) {
        imagetable[i].style.visibility = "hidden";
    } 
  }

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  function colorPrice() {
    const pricecolor = document.querySelectorAll("span")
    for (let i = 0; i < pricecolor.length; i++) {
        pricecolor[i].style.color = `rgb(${red}, ${green}, ${blue})`
    } 
  }

