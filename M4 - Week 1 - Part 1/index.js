// 1 Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.
console.log("Exercise 1")

const sum = (x,y) => {
    if(x == y) {
       return (x + y) * 3
    } else {
       return x + y
    }
}

console.log(sum(1,2));
console.log(sum(2,2));

//2 Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.
console.log("Exercise 2")

const check = (a,b) => {
    if((a == 50 || b == 50) || (a + b == 50)) {
        return true
    } else return false;
}
console.log(check(50,50));
console.log(check(5,5));

//3 Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string.

// One way to do it is with replace
console.log("Exercise 3")

const newStr = "Paprika";
const New = newStr.replace("P", "B");
console.log(New)

// This is another way
const Str = "Bread";
const newBread = Str.slice(1,5);
console.log(newBread);

//3 This is the function I think we supposed to do by this way.
const cut = (a,b) => {
    const N =  a.substring(b)
    return N
}

console.log(cut("Paprika", 1));

//4 Create a function to find and return the largest of three given integers.
console.log("Exercise 4")

const numb1 = 10;
const numb2 = 20;
const numb3 = 30;


const largest = () => {
    if(numb1 > numb2) {
        return numb1
    } else if (numb2 > numb3) {
        return numb2
    } else if (numb3 > numb1) {
        return numb3
    }
}

console.log(largest());


// 5 Create a function to check if two numbers are in the range 40-60 or 70-100. Return true if they do, return false if one (or both) don't.

// So here I checked the numbers and then I console.log it if one of the parameters that are numbers are not in the range it will be false.
console.log("Exercise 5")

const checkNumbers = (x,y) => {
    if((x >= 40 && x <= 60 && y >= 40 && y <= 60)
     || 
     (x >= 70 && x <= 100 && y >=70 && y <= 100)) {
         return true
     } else return false
}

console.log(checkNumbers(40,60));
console.log(checkNumbers(70,80));
console.log(checkNumbers(30,60));


//6 Create a function to create a new string composed of a specified number of copies of a given string. Pass the string and the number of copies as parameters.
console.log("Exercise 6")

const creatingStr = (str,num) => {
    return str.repeat(num)
}

console.log(creatingStr("Apple", 5));


//7 Create a function to display the city name if the string begins with "Los" or "New". Pass the city name as a parameter. Return false if they start with a different string.
console.log("Exercise 7")

const map = (city) => {
    if((city.length >= 3 && city.substring(0,3) === "Los")
    ||
    (city.substring(0,3) === "New")) {
        return city
    } else return false;
}

console.log(map("New York"));
console.log(map("York"));
console.log(map("Cuba"));

//8 Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.
console.log("Exercise 8")

const sumElements = (arr) => {
    return arr[0] + arr[1] + arr[2];
}   

console.log(sumElements([5, 5, 5]));
console.log(sumElements([5, 5, -22]));

//9 Create a function to test if an array of length 2 contains 1 OR 3. Return true is it does, false if it doesn't.
console.log("Exercise 9")

// In this exercise I am checking if the parameter arr that will become a array in the console.log
// includes the numbers 1 or 3, if it is true return true, if it is not return false.

const testArray = (arr) => {
    if(arr.includes(1) || arr.includes(3)) {
        return true
    } else 
    {
        return false
    }
}

console.log(testArray([1]));
console.log(testArray([5]));


// Create a function to test if an array of length 2 DOES NOT contain 1 or 3. Return true if it doesn't, false if it does.
console.log("Exercise 10")
// In this exercise I just used ! to say if this is not true in this case if arr not includes 1 and 3 than return true.

const notIncludes = (arr) => {
    if(!arr.includes(1) && !arr.includes(3)) {
        return true
    } else 
    {
        return false
    }
}

console.log(notIncludes([1]));
console.log(notIncludes([5]));

//11 Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string.
console.log("Exercise 11")

const countries = ["Germany", "Ireland", "Japan", "Brazil", "Spain", "Portugal"];

const longestString = (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i];
        if(currentItem.length > result.length) {
            result = arr[i]
        }
    }
    return result;
}

console.log(longestString(countries));


//12 Create a function to find the types of a given angle:
// Acute angle ⇒ between 0 and 90 degrees. Return acute.
// Right angle ⇒ 90 degree. Return right
// Obtuse angle ⇒ between 90 and 180. Return obtuse
// Straight angle ⇒ 180 degrees. Return straight

console.log("Exercise 12")
// So in this exercise I have to use a parameter that will be the angle when I console.log

const calcAngle = (angle) => {
    if(angle < 90) {
        return "Acute Angle"
    }
    else if (angle === 90) {
        return "Right Angle"
    }
    else if (angle < 180) {
        return "Obtuse Angle"
    }
    else if (angle > 180) {
        return "Straight Angle"
    }
}

console.log(calcAngle(50));
console.log(calcAngle(90));
console.log(calcAngle(179));
console.log(calcAngle(195));


//13 Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter
console.log("Exercise 13")

const integersE = [5,15]

const greatestIndex = (x) => {
 if(x[0] > x[1]){
     return x[0]
 } else if (x[1] > x[0]) {
     return x[1]
 }
}

console.log(greatestIndex(integersE));


//14 Create a function to find and return the largest even number from an array of integers that is passed a parameter.
console.log("Exercise 14")

const largestEven = (numb) => {
    let result = 0;
    for (let i = 0; i < numb.length; i++) {
        if(numb[i] % 2 === 0) {
            result = numb[i]
        }
    }
    return result
}

console.log(largestEven([2,4,6,8,10,12,14]));



// 15 Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
// Return true if that's the case, return false if it's not.

console.log("Exercise 15")

const checkIntegersNumbers = (x,y) => {
    if(x > 0 && y < 0) {
        return true
    } else return false
}

console.log(checkIntegersNumbers(1,-1));
console.log(checkIntegersNumbers(-1,5));


// 16 Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case.
// If the string's length is less than 3, convert the whole string into uppercase. 
// Pass the original string as a parameter.

console.log("Exercise 16")

const NewStrLowerAndUpper = (text) => {
   if(text.length <= 3) {
       return text.toUpperCase();
   } else if (text.length > 3) {
    let part1 = text.substring(0,3).toLowerCase();
    let part2 = text.substring(3, text.length);
    return part1 + part2
   }
}

console.log(NewStrLowerAndUpper("BRAZIL"));
console.log(NewStrLowerAndUpper("bra"));

//17 Create a function to calculate the sum of two integers (passed as parameters).
//  If the sum is in the 50-80 range, return 65, otherwise, return 80.


console.log("Exercise 17")

const sumIntegers = (a,b) => {
    if(a + b > 50 && a + b < 80) {
        return 65
    } else return 80
}

console.log(sumIntegers(50,10));
console.log(sumIntegers(30,10));


// 18 Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
// The number has 3 as a factor ⇒ return Diego 
// The number has 5 as a factor ⇒ return Riccardo 
// The number has 7 as a factor ⇒ return Stefano 
// If the number does not have 3,5, or 7, return the original number. 
// ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. 
// One number can have more than one factor, in that case you should return both names. 
// Ex: 15 has both 3 and 5 has factors: the function will return DiegoRiccardo


console.log("Exercise 18")

const convert = (a,b,c) => {
    if(a === 3) {
        return "Diego"
    } 
    if (b === 5) {
        return "Riccardo"
    } 
    else if (c === 7) {
        return "Stefano"
    }
}

console.log(convert(5));

// Create a function that that takes a phrase as a parameter and returns its acronym. 
// Ex. British Broadcasting Corporation returns BBC

console.log("Exercise 19")

const acronym = (phrase) => {
    const b = phrase.map(function (text){
        text.toUpperCase();
    })
    return b
}

console.log(acronym("ball"));
