// Additional assignments for M2-W3-P1

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

/* WRITE YOUR ANSWER HERE */

console.log("EXTRA 1")
let randomElements = [];

function checkArray (generaterTenElements) {
    let randomNumbers = 0
    for(let i = 0; i < 10; i++) {
        generaterTenElements.push(generateRandom());
        if(generaterTenElements[i] > 5) {
            randomNumbers = randomNumbers + generaterTenElements[i];
            console.log(generaterTenElements[i] + " " + "This number is bigger than 5, ");
        } else {
            console.log(generaterTenElements[i] + " " + "This number is smaller than 5, ");
        }
    }
    return randomNumbers;
}

function generateRandom () {
    return Math.floor(Math.random() * 10);
}

console.log(checkArray(randomElements));


/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 2")

let shoppingCart = [
    {
        name: "book",
        price: 50,
        id: "d102c3",
        quantity: 5,
    },
    {
        name: "pen",
        price: 10,
        id: "d102c4",
        quantity: 5,
    },
    {
        name: "bottle",
        price: 30,
        id: "d102c5",
        quantity: 5,
    },
]


function shoppingCartTotal (shoppingCart) {
    let total = 0;
    for(let i = 0; i < shoppingCart.length; i++){
    let itemPrice = shoppingCart[i].price
    let totalPrice = itemPrice * shoppingCart[i].quantity
        total = total + totalPrice
    }
    return total
}
console.log(shoppingCartTotal(shoppingCart));



/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 3")

function addToShoppingCart(addItem) {
    shoppingCart.push(addItem)
    return shoppingCart.length
}

console.log(addToShoppingCart({
    name: "headset",
    price: 70,
    id: "d102c6",
    quantity: 5,
},))


/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 4")

function maxShoppingCart (shoppingCart) {
    let maxArr = []
    let maxValue ;
    let indexName = 0
    for(let i = 0; i < shoppingCart.length; i++) {
        maxArr.push(shoppingCart[i].price);
       
    }
    maxValue = Math.max(...maxArr);
    indexName = maxArr.indexOf(maxValue);
    console.log(maxValue + " + " + shoppingCart[indexName].name);
    return maxValue
}

console.log(maxShoppingCart(shoppingCart))




/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 5")

function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
  }

  console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 6")

function loopUntil (x) {
    let nArray = [];
    for(let i = 0; i < x; i++) {
        nArray.push((Math.floor(Math.random() * 9)));
    }
    return nArray
}

console.log(loopUntil(5));


/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 7")

let newArray = ["Poland", "Italy", 1990, 2010, "Germany"];
// let saveAverageNumbers = [];
// let total = [ 0, 1, 2, 3 ].reduce(
//     ( previousValue, currentValue ) => previousValue + currentValue,
//     0
//   )

function createArray1 () {
    let saveNumbers = [];
    for(let i = 0; i < newArray.length; i++) {
        if (!isNaN(newArray[i])) {
            saveNumbers.push(newArray[i])
        }
    }
    return saveNumbers
}

console.log(createArray1().reduce(function(a, b){return a + b}));



/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 8")

let list = ["Strive", "Strive School", "Strive College Germany", "Strive Germany", "Strive Italy"];

function longest (longestArrayString) {
   let word = ""
   longestArrayString.map (function(str){
       if(str.length > word.length) {
           word = str
       }
   })
   return word
}

console.log(longest(list));


/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 9")

// let emailContent = "emailContent";

function spamfilter (emailContent) {
    if(emailContent.includes( "SPAM" || "SCAM")) {
        return false
    } else (!emailContent.includes("SPAM" || "SCAM")) 
         return true
}

console.log(spamfilter("SPAM"));
console.log(spamfilter("BRAZIL"))

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXTRA 10")

let date = new Date("27/01/2022");

function checkDiffDate (date) {
    let checkdate 
    if(!new Date == checkdate) {
        checkdate = date
    }
    return checkdate;
} 

console.log(checkDiffDate("28/01/2022"))




/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */
// console.log("EXTRA 11")

// function matrixGenerator (x, y) {
//     let result = [];
//     for(let i = 0; i < x; i++) {
//         for (let n = 0; n < y; n++) {
//             result.push(i.toString() + n.toString());
//         }
//     }
//     return result
// }

// console.log(matrixGenerator(3, 2));



/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/