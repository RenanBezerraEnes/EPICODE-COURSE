// First Exercise

// let integer1 = 10
// let integer2 = 20

// if (integer1 > integer2) {
//     console.log("Integer 1 is the largest") 
// } else (integer2 > integer1) 
//     console.log("Ïnteger 2 is the largest")
// {    
// }

//Second Exercise(they might have wrote two times exercise 2, thats why I have two as well...)

// if (i = 0, i <= 5, i++) {
//     console.log("Equal",)
// } else {
//     console.log("Not equal")
// }

//Second Exercise

// let i = 25;

// if(i % 5 === 0) {
//     console.log("Divisible by 5")
// } else {
//     console.log("Not divisible")
// }

//Third Exercise

// let x = 16
// let y = 5

// if(x === 8 || x + 8 === 8 || x - 8 === 8) {
//     console.log("X is true")
// }  else (y === 8 || y + 8 === 8 || y - 8 === 8) 
//     console.log("Y is true")


//Fourth Exercise

// let totalShoppingCart = 60;

// if(totalShoppingCart >50) {
//     console.log("Free shipping")
// } else {
//     console.log("Delivery $10")
// }

//Fifth Exercise

// let totalShoppingCart = 60;
// let discount = 20;
// let totalCost = (totalShoppingCart / 100) * discount;

// if(totalShoppingCart > 50) {
//     console.log("Free shipping")
//     console.log("You have $", totalCost, "discount, today is Black Friday and everything is 20% discount.")
//     console.log(`Final price is : $${totalShoppingCart - totalCost }`)
// } else {
//     console.log("Delivery $10")
// }

//Sixth Exercise

let container1 = 60
let container2 = 55
let container3 = 25

if(container1 > container2 && container3) {
    console.log("Container1")
} else if(container2 > container1 && container3) {
    console.log("Container2")
} else if(container3 > container1 && container3) {
    console.log("Container 3")
} 




if(container2 > container1 > container3) {
    console.log("Container2")
} else if (container2 < container1 && container2 > container3){
    console.log("Container2")
} 


if(container3 > container1 > container3) {
    console.log("Container3")
} else if (container3 < container1 && container3 > container2) {
    console.log("Container3,")
} else (container3 < container1 && container3 < container2) 
console.log("Container3")










//Seventh Exercise in the first case it will be false because it is not a integer number but in the second case it will be true.

// let numberTest = 20.5;

// console.log(Number.isInteger(numberTest));

// let numberTest1 = 20;

// console.log(Number.isInteger(numberTest1));

//Eighth Exercise in this case depends on the value of the variable number, it will determine if the number is even or odd.

// let number = 36;

// if(number % 2 === 0) {
//     console.log("The Number is even")
// } else {
//     console.log("The Number is odd")
// }

//Ninth Exercise

// let val = 7
// if(val < 5) {
//     console.log("Less than 5")
// } else if (val < 10) {
//     console.log("Less than 10")
// } else {
//     console.log("Greater than or equal to 10")
// }

//Tenth Exercise
// Write chained if/else if statements to fulfill the following conditions:
// num < 5 - display Tiny
// num < 10 - display Small
// num < 15 - display Medium
// num < 20 - display Large
// num >= 20 - display Huge

// let num = 21

// if (num <= 5) {
//     console.log("Tiny")
// } else if (num > 5 && num < 10) {
//     console.log("Small")
// } else if (num > 10 && num < 15) {
//     console.log("Medium")
// } else if (num > 15 && num < 20) {
//     console.log("Large")
// } else {
//     console.log("Huge")

//Eleventh Exercise

// let isMale = "Male"
// let gender = isMale ? "Female" : "Male";
// console.log(gender);

//Twelfth Exercise

// let i = 0;
// while(i <= 5) {
//     console.log("The number is: ", i)
//     i++
// }

//Thirteenth Exercise

// for(i = 0; i <= 10; i++) {
//     console.log("The number is: ", i)
// }

//Fourteenth Exercise
// for(i = 0; i <= 10; i++) {
//     if(i === 3) {
//         continue
//     } else if (i === 8) {
//         continue
//     }
//     console.log("The number is: ", i)
// }

//Fifteenth Exercise

// for(i = 0; i <= 15; i++) {
//     if(i % 2 === 0)
//     console.log("This is a even number: ", i)
//     else
//     console.log("This is a odd number: ", i)
// }

//Sixteenth Exercise

// for(i = 0; i <= 100; i++) {
//     if(i % 3 === 0)
//     console.log("Fizz", i)
//     else if (i % 5 === 0)
//     {
//         console.log("Buzz", i)
//     } else (i % 3 === 0 && i % 5 === 0)
//         console.log("FizzBuzz", i)
// }

//Seventeenth Exercise

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("MONDAY");
//     break
//   case 2:
//     console.log("TUESDAY");
//     break
//   case 3:
//     console.log("WEDNESDAY");
//     break
//   case 4:
//     console.log("THURSDAY");
//     break
//   case 5:
//     console.log("FRIDAY");
//     break
//   case 6:
//     console.log("SATURDAY");
//     break
//   case 7:
//     console.log("SUNDAY");
//     break
// }
