/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 1")

// let l1 = prompt("Enter a whole number for the l1 of your rectangle.");
// let l2 = prompt("Enter a whole number for the l2 of your rectangle.");

// function area(l1, l2) {
    // let l1 = prompt("Enter a whole number for the length of your rectangle.");
    // let l2 = prompt("Enter a whole number for the width of your rectangle.");
//     return l1 * l2
// }

// console.log("The area of your rectangle is " + area(l1, l2));




/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 2")

let integer1 = 10
let integer2 = 10

function crazySum (integer1, integer2) {
    if(integer1 === integer2) {
        return (integer1 + integer2) * 3
    } else 
    return integer1 + integer2;
}

const result = crazySum (integer1, integer2);
console.log(result)



/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 3")

let nineteen = 19
let givenNumber = 40

function crazyDiff (nineteen, givenNumber) {
    let diff = givenNumber - nineteen
    if(diff > 19) {
        return diff * 3
    } else 
    return diff
}

const resultDiff = crazyDiff (nineteen, givenNumber);
console.log(resultDiff)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 4")

function boundary (n) {
    return ((n >= 20 && n <= 100) || n === 400);
}

console.log(`${boundary(20)}, ${boundary(101)}, ${boundary(400)}`);


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 5")

function strivify (str) {
    return str + "Strive School"
}

const strChecking = strivify
console.log(strChecking)


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 6")

function check3and7 (randomNumber) {
    if (randomNumber % 3 === 0 && randomNumber % 7 === 0) {
        return randomNumber
    }
}

console.log(`${check3and7(20)}, ${check3and7(560)}`)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 7")

let stri = "Strive"

function reverseString (stri) {
    let revString = "";
    for (let i = stri.length - 1; i >= 0; i--) {
        revString += stri[i];
    }
    return revString
}

console.log(reverseString(stri));


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 8")

function upperFirst(str) {
    let arr = str.split(" ");
    let result = arr.map (
        function(val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return result.join(" ");
}

console.log(upperFirst("paris is a nice city"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 9")

function cutString (str) {
    return str.substring(1, str.length - 1);
}

console.log(cutString("JavaScript"));


/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 10")
    // let random = nArray + Math.floor(Math.random() * 10) + 1;
function giveMeRandom (n) {
    let nArray = [];
    for(let i = 0; i < n; i++) {
        nArray.push((Math.floor(Math.random() * 10)));
    }
    return nArray
}

console.log(giveMeRandom(10));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/