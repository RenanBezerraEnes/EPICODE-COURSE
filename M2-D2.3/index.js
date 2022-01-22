//Shopping cart and ambassadors - BuildTime #2

/*
Details:    Today you are in charge of building the shopping cart logic for a website that supports ambassadors. 
            Your job is to build a program flow that will elaborate a list of prices, a user and a shipping cost to calculate the correct cart total. 

            If the user is an ambassador, the cart should be discounted of 30% BEFORE shipping cost (ambassadors still pay shipping)
            If the user is NOT an ambassador, the cart should NOT be discounted
            Either way, if the cart goes over 100, shipping cost should be 0.

            Some users as examples are already provided.
            
           
*/

const users = [
  {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  },
  {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  },
  {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  },
];

const prices = [
    {
     product: "book",
     price: 34,
    },

    {
    product: "bottle",
    price: 5,
    },

    {
    product: "pen",
    price: 2,
    }

];


const shippingCost = 50;
let totalPrice = 0;

console.log("Welcome to the shopping cart");
let user = parseInt(prompt("Who is shopping now, Marco(1), Paul(2), Amy(3)"));

let products = parseInt(prompt("Which products do you want to order? book(1), bottle(2), pen(3)"));

let howManyItems = parseInt(prompt("How many itens do you want?"));

products--;
totalPrice = prices[products].price * howManyItems;

if ((user === 1 || user === 2 || user === 3) && (totalPrice <= 100)) {
  user--;  
  if (users[user].isAmbassador) {
      totalPrice = totalPrice - (totalPrice * 0.3) + shippingCost
      console.log("Hello, " + users[user].name + ", you ordered " +  howManyItems + " " + prices[products].product + " the final price is :" + totalPrice);
  } else {
    totalPrice = totalPrice + shippingCost
    console.log("Hello, " + users[user].name + ", you ordered " +  howManyItems + " " + prices[products].product + " the final price is :" + totalPrice);
  } 
} else {
    console.log("Hello, " + users[user].name + ", you ordered " +  howManyItems + " " + prices[products].product + " the final price is : $" + totalPrice);
}




//   let marcoCost = 70;
//   let discountBeforeShippingMarco = (marcoCost / 100) * 30
//   let totalCost = 0;

//   for(i = 0; i < marco.lenght; i++) {
//       let checkingAmbassador = (marco[i].isAmbassador)
//       if (checkingAmbassador === true) {
//         let checkingDiscount = checkingAmbassador - discountBeforeShippingMarco
//         totalCost.push(checkingDiscount)
//       }

//   if(checkingAmbassador === true){
//       let marcoCostBeforeShipping = (marcoCost / 100) * 30;
//       totalCost.push(marcoCostBeforeShipping)
//   if (marcoCostBeforeShipping < 100) {
//    let beforeShippingPlusShippingCost = marcoCostBeforeShipping + shippingCost
//     totalCost.push(beforeShippingPlusShippingCost)
//   }
//   }
//   }
//   console.log(totalCost)
