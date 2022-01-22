//First Exercise - Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.

// const me = {
//     name: "Joh",
//     lastName: "Doe",
//     skills: ["javascript", "html", "css"],
// };
 
// me.skills.pop();
// console.log(me);


//Second Exercise - Write a piece of code to create an array of only ODD numbers from 1 to 100

// let numbers = []

// for(i = 0; i < 100; i++) {
//     if(i % 2 === 0)
//     continue
//     numbers.push(i)
// }
// console.log(numbers)

//Third Exercise - Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive

// let elements = []

// while (elements.length < 10) {
//     let random = Math.floor(Math.random() * 100) + 1;
//     if(elements.indexOf(random) === -1)
//     elements.push(random);
// }

// console.log(elements)

//Fourth Exercise -   Write a piece of code for getting only even numerical values from an array . 
// let numbers = [20, 60, 35, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14, 15]
// let numbersEven = []

// for(let i = 0; i < numbers.length; i++) {
  
//      if(numbers[i] % 2 === 0) {
//          numbersEven.push(numbers[i])
//      }
// }

// console.log(numbersEven)

//Fifth Exercise - Write a piece of code to sum up the numbers in an array

// let up = [20, 50, 70, 90, 100]
// let total = 0

// for(let i = 0; i < up.length; i++) {
//     let value = up[i];
//     console.log(value)
//     console.log("----")
//     total = total + value
// }
// console.log(total)

//Sixth Exercise -  Write a piece of code for increasing all the numerical values in a array by 1.

// let nummers = [1, 2, 3, 4, 5, 6 , 7]
// for(let i = 0; i < nummers.length; i++) {
//     nummers[i] += 1;
// }

// console.log(nummers)

//Seventh Exercise - Write a piece of code for deleting only even entries from an array.
// let nummers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// for(let i = 0; i < nummers.length; i++) {
//     if(nummers[i] % 2 === 0) {
//         nummers.splice(i, 1)
//     }
// }

// console.log(nummers)


//Eighth Exercise - Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates

// let tenElements = []

// while (tenElements.length < 10) {
//     let random = Math.floor(Math.random() * 10) + 1;
//     if(tenElements.indexOf(random) === -1)
//     tenElements.push(random);
// }

// console.log(tenElements);


//Ninth Exercise - Replace all the strings contained in an array with their length.
 //es.: ["strive", "is", "great"] => [6, 2, 5]

// let arr =  ["strive", "is", "great"];


//  for(let i = 0; i < arr.length; i++){
//  arr[i] = arr[i].length
//  }

// console.log(arr)


//Tenth Exercise - Write a piece of code for reverting an array.
 //es:[1, 3, 5] ==> [5, 3, 1]

// let str = [1, 3, 5];

// let reverseStr = []
// for(let i = str.length; i > 0; i--) {
//     reverseStr.push(str[i -1]);
// }

// console.log(reverseStr);

//Eleventh Exercise

// let big = [1, 5, 10 , 20, 30]

// console.log(Math.max(...big));

//Twelfth Exercise

const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ];

  
/* EXERCISE 12
    Write a piece of code to  find the oldest movie in the provided movies array.
*/

let oldest = 0

for(let i = 0; i < movies.length; i++) {
   // console.log(movies[i].Year)
   if(movies[i].Year > oldest) {
       oldest = movies[i].Year
   }
}
/* Thirteenth
    Write a piece of code to get the number of movies contained in the provided movies array.
*/

console.log(movies.length)

//Fourteenth Exercise

let nameMovies = []

for(i = 0; i < movies.length; i++) {
   let keep =(movies[i].Title);
   nameMovies.push(keep)
}

console.log(nameMovies)


//Fifteenth Exercise -  Write a piece of code to get only the movies produced in this millennium from the provided movies array.

let thisMillenium = []

for(i= 0; i < movies.length; i++) {
    let oldMillenium =(movies[i].Year);
    if(oldMillenium > 2000) {
        thisMillenium.push(movies[i])
}
}

console.log(thisMillenium)


//Sixteenth Exercise -  Write a piece of code to get  the movie with the  id given below from the provided movies array.
let givenId = []

for(i = 0; i < movies.length; i++)  {
    let gettingId =(movies[i].imdbID);
    givenId.push(gettingId);
}


console.log(givenId);

//Seventh Exercise - Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.

let sumTotal = []

for(let i = 0; i < movies.length; i++){
    let checkYears = (movies[i].Year);
    sumTotal.push(checkYears)
}

console.log(sumTotal)

let sumFinal = 0
for(let i = 0; i <sumTotal.length; i++) {
  let value = sumTotal[i];
  sumFinal +=Number(value);
}

console.log(sumFinal)

//Eighteenth Exercise -  Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.

for (let i = 0; i < nameMovies.length; i++) {
    nameMovies[i] = nameMovies[i].length
}

console.log(nameMovies)