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

const longestString = () => {

}