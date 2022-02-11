// JS EXERCISES

//         21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete the email property from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string from the previous array
//         26) Create an array with 100 random numbers in it
//         27) Write a function to get the maximum and minimum values from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays as parameters and returns the longest one
//         30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values



//         21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = "John";
let y = "Doe";
console.log("John <> Doe");

//         22) Create an object with properties such name, surname, email
const information = {
    name: "Martin",
    surname: "Luther King Jr",
    email: "MartinLutherKing@gmail.com",
};
//         23) Delete the email property from the previously created object
    delete information.email;
    console.log(information);

//         24) Create an array with 10 strings in it
//         25) Print in the console every string from the previous array
const newStr = ["Germany", "UK", "France", "Italy", "Spain", "Poland", "Portugal", "Belgium", "Austria", "Netherlands"];
console.log(newStr);

function checkStr () {
for(let i = 0; i < newStr.length ; i++){
    console.log(newStr[i])
}
}
checkStr();

// 26) Create an array with 100 random numbers in it 
// Using arrow functions and Array.from()

let randomNumber = Array.from({length: 100}, () => Math.floor(Math.random() * 100));  

let random = [];
for (let i = 0; i < 100; i++) {
    let b = Math.floor(Math.random() * 100);
    random.push(b)
}

//         27) Write a function to get the maximum and minimum values from the previously created array

// console.log(Math.min(... randomNumber));

function minValue () {
    console.log(Math.min(... randomNumber));
    console.log(Math.max(...randomNumber));
}
minValue();

//         28) Create an array of arrays, in which every array has 10 random numbers
// let arrayOfArray = [[5, 7, 8],[6,3,7],[]];

let arrayOfArray = []
for (let i = 0; i <3; i++) {
  const temp = []
  for (let k = 0; k < 10; k++) {
    let b = Math.floor(Math.random() * 100);
    temp.push(b)
}
arrayOfArray.push(temp)
    
}
console.log(arrayOfArray)




// const k = [...Array(6)].map(
//     () => [...Array(10)].map(
//         () => Math.floor(Math.random() * 10) + 1
//     )
//  )

// console.log(k)

//         29) Create a function that gets 2 arrays as parameters and returns the longest one
let Array1 = ["Strive"]
let Array2 = ["Strivel", "School"]

function getsArrays (Array1, Array2) {
    if(Array1 > Array2) {
        return Array1
    } else if (Array2 > Array1) {
        return Array2
    }
}
const longest = getsArrays(Array1, Array2);
console.log(longest)

//         30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

let arrayNumber1 = [1,2,3,4,5,6,7,8];
let arrayNumber2 = [9,10,11,12,13,14,15,16];

function sumNummers (arrayNumber1, arrayNumber2) {
    let totalArrayNumber1 = 0
    for (let i = 0; i < arrayNumber1.length; i++) {
        let valueArrayNumber1 = arrayNumber1[i]
        totalArrayNumber1 += valueArrayNumber1
    }

    let totalArrayNumber2 = 0
    for (let i = 0; i < arrayNumber2.length; i++) {
        let valueArrayNumber2 = arrayNumber2[i]
        totalArrayNumber2 += valueArrayNumber2
    }

    if(totalArrayNumber1 > totalArrayNumber2) {
        return totalArrayNumber1
    } else if (totalArrayNumber2 > totalArrayNumber1) {
        return totalArrayNumber2
    }
}

const highestSum = sumNummers(arrayNumber1, arrayNumber2);
console.log(highestSum)


// DOM EXERCISES

//         31) Get the element with an id of "container" from the page
//         32) Get every <td> element from the page
//         33) Use a loop for printing the text inside of every <td> element in the page
//         34) Write a function to change the heading of the page
//         35) Write a function to add an extra row to the table
//         36) Write a function to add a class of "test" to each row in the table
//         37) Write a function to add a red background to every link in the page
//         38) Console log "Page loaded" when the page is correctly loaded
//         39) Write a function to add new items to a unordered list
//         40) Write a function to empty a list


//         31) Get the element with an id of "container" from the page

const getContainer = document.querySelector("#container");
console.log(getContainer)

//         32) Get every <td> element from the page

const getTd = document.querySelectorAll("td");

//         33) Use a loop for printing the text inside of every <td> element in the page

function printingTd () {

    for (let i = 0; i < getTd.length; i++) {
        const printTd = getTd[i].innerHTML
        console.log( printTd)
    }
}
printingTd ();

//         34) Write a function to change the heading of the page

const changingHeader = function (newHeader) {
    const h1 = document.querySelector("header");
    h1.innerHTML = newHeader;
  };

  changingHeader("POKEMON GO")

  //         35) Write a function to add an extra row to the table

function addTd () {
    let createTd = document.createElement("td");
    const addTdToTheTable = document.querySelector("table");
    addTdToTheTable.appendChild(createTd);
}

addTd();


//         36) Write a function to add a class of "test" to each row in the table
// I Used querySelectorAll but then it didn't get any class at all.

const addClass = function (newClass) {
    const getTdRows = document.querySelectorAll("td");
   for (let i = 0; i < getTdRows.length; i++) {
      getTdRows[i].classList.add(newClass)
       
   }
}

addClass("test");

//         37) Write a function to add a red background to every link in the page

const backgroundLink = function () {
    const getLink = document.querySelectorAll("td a");
    for (let i = 0; i < getLink.length; i++) {
        getLink[i].style.background = "red";
    }
}

backgroundLink();

//         38) Console log "Page loaded" when the page is correctly loaded
// I am not sure If I should use console.log or alert in this case.
window.onload = function () {
    console.log("Page loaded");
}

//         39) Write a function to add new items to a unordered list

const addNewItem = function () {
    let createLi = document.createElement("li");
    const getUl = document.querySelector("ul");
    getUl.appendChild(createLi)
}

addNewItem();

//         40) Write a function to empty a list
let parentElement = document.querySelector("#getId")

function emptyList (e) {
    e.replaceChildren();
}

emptyList(parentElement);

// The second way to empty a String:

// function emptyList2 (e) {
//     e.textContent = ""; 
//  }
 
//  emptyList2(parentElement);

//The third way to empty a String:

// function emptyList3(e) {
//     element.innerHTML = ""; 
//  }
 
//  emptyList3(parentElement);

//and the last way to empty a String:

// function emptyList4(e) {
//     while(e.firstElementChild) {
//        e.firstElementChild.remove();
//     }
//   }

//   emptyList4(parentElement);
  
// EXTRA EXERCISES

// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
// 42) Create a button that will hide every image on the page when clicked
// 43) Create a button that will hide or show the table on the page when clicked
// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric) - i don't have numbers.
// 45) Delete the last letter from the heading each time the user clicks on it
// 46) Change the background color of a <td> if the user clicks on it
// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
// 48) Add automatically a pink border to a cell when the mouse hovers it
// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
// 50) Write a function to remove the last table from the page


// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property

let linkCursor = document.querySelectorAll(".links");

for (let i = 0; i < linkCursor.length; i++) {
    linkCursor[i].addEventListener("mouseover", e => {
        alert("You hover the Link");
    })
}

// 42) Create a button that will hide every image on the page when clicked

const buttonH = document.querySelector("#buttonhide");
// const getImg = document.querySelectorAll("img");

buttonH.addEventListener("click", () => {
    const getImg = document.querySelectorAll(".links");
    for (let i = 0; i < getImg.length; i++) {
        getImg[i].style.display = "none";
    }
    // getImg.style.visibility = "none";
})

// 43) Create a button that will hide or show the table on the page when clicked


const tableH = document.querySelector("#tablehide");

tableH.addEventListener("click", () => {
    const getTable = document.querySelector("table");
    if (getTable.style.display === "none") {
        getTable.style.display = "block"
    }
    else {
        getTable.style.display = "none";
    }
})


// 45) Delete the last letter from the heading each time the user clicks on it


const deleteH = document.querySelector("#deleteLastLetter");

deleteH.addEventListener("click", () => {
    let getHeader = document.querySelector("header");
    getHeader = getHeader(substring(0, getHeader.length - 1));
})

// 46) Change the background color of a <td> if the user clicks on it

// const backgroundLink = function () {
//     const getLink = document.querySelectorAll("td a");
//     for (let i = 0; i < getLink.length; i++) {
//         getLink[i].style.background = "red";
//     }
// }

const changeTd = document.querySelector("#td_bg");

changeTd.addEventListener("click", () => {
    let getTd = document.querySelectorAll("td");
    for (let i = 0; i < getTd.length; i++) {
        getTd[i].style.background = "purple";
    }
})

// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>

// 48) Add automatically a pink border to a cell when the mouse hovers it


const changeColorHover = document.querySelector(".everyTd");

changeColorHover.addEventListener("mouseover", () => {
    let getTd = document.querySelectorAll("td");
    for (let i = 0; i < getTd.length; i++) {
        getTd[i].style.border = "5px solid pink";
    }
})

// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page

function createTable () {
    const getBody = document.querySelector("body");
    let row = getBody.insertCell()
    while(row < 4) {
        let cells = row.insertCell();
        return cells
    }
}

const getElements = createTable()

// 50) Write a function to remove the last table from the page



