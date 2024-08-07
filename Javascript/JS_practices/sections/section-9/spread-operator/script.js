"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivery: function ({
    time,
    address,
    dish1,
    dish2,
    starterIndex,
    mainIndex,
  }) {
    console.log(
      `Your order ${dish1[starterIndex]}, ${dish2[mainIndex]} will be delivered to [${address}] at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Spread operator works on all Iterables [array, strings, maps or sets]

const arr = [7, 8, 9];
const spreadArr = [1, 2, ...arr];
console.log(...spreadArr);

const newArray = [...restaurant.mainMenu, "Gnocci"];
console.log(newArray);

//copy array
const mainMenyCopy = [...restaurant.mainMenu];
console.log(mainMenyCopy);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = "Jonas";
const letters = [...str];
console.log(letters);

// Real-world example
// const ingredients = [
// prompt("Let's make pasta! Ingredient 1?"),
// prompt("Ingredient 2?"),
// prompt("Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);
