'use strict';

/*

  Julia and Kate are doing a study on dogs. So each of them
  asked 5 dog owners about their dog's age, and stored
  the data into an array (one array for each). For now, they
  are just interested in knowing whether a dog is an adult or 
  puppy. A dog is an adult if it is at least 3 years old, and 
  it's a puppy if it's less than 3 years old.

  Create a function 'checkDogs' which accepts 2 arrays of
  dogs' ages ('dogsJulia' and 'dogsKate'), and does the
  following things;

  1. Julia found out that the owners of the FIRST and LAST TWO
  dogs actually have cats, not dogs! So create a shallow copy of
  Julia's array, and remove the cat ages from the copied array
  (because it's a bad practice to mutate function parameters)

  2. Create an array with both Julia's (corrected) and Kate's
  data

  3. For each remaining dog, log to the console whether it's an 
  adult ("Dog numeber 1 is an adult, and is 5 years old") or a puppy 
  ("Dog number 2 is still a puppy")

  4. Run the function for bothe test datasets


  TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's 
  data [4, 1, 15, 8, 3]

  TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's 
  data [10, 5, 6, 1, 4]
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCorrected = dogsJulia.slice();
  juliaCorrected.splice(0, 1);
  juliaCorrected.splice(-2, 2);

  const dogs1 = [...juliaCorrected, ...dogsKate];

  dogs1.forEach(function (dog, i) {
    if (dog >= 3)
      console.log(`Dog number ${i + 1} is adult, and is ${dog} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/*

  Let's go back to Julia and Kate's study about dogs.
  This time, they want to convert dog ages to human ages
  and calculate the average age of the dogs in their study

  Create a function "calcAverageHumanAge", which 
  accepts an array of dogs ages ('ages'), and does 
  the following things in order:

  1. Calculate the dog age in human years using the folliwng
  formula: if the dog is <= 2 years old, humanAGe = 2 * dogAge. 
  If the dog is > 2 years old, human = 16 + dogAge * 4.

  2. Exclude all dogs that are less than 18 human years 
  old ( which is the same as keeping dogs that are at least
  18 years old)

  3. Calculate the average human age of all adult dogs (you
  should already know from other challenges how we calculage averages)

  4. Run the function for both test datasets

  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
  TEST DATA 2  [16, 6, 10, 5, 6, 1, 4]

  GOOD LUCK 🎉

*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAge);

//   const adults = humanAge.filter(adult => adult >= 18);
//   console.log(adults);

//   const average = adults.reduce((acc, cur) => acc + cur / adults.length, 0);

//   return average;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/*

  Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
  but this time as an arrow function, and using chaining!

  TEST DATA 1 : [5, 1, 4, 1, 15, 8, 3]
  TEST DATA 2 : [16, 6, 10, 5, 6, 1, 4]

 */

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(adult => adult >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/*

    Julia and Kate are still studying dogs, and this time
    they are studying if dogs are eating too much or too little.

    Eating too much means the dog's current food portion
    is larger than the recommended portion, and eating
    too little is the opposite.

    Eating an okay amount means the dog's current food portion
    is within a range 10% aboive and 10% below the 
    recommended portion (see hint).

    1. Loop over the array containing dog objects, and for
    each dog, calculate the recommended food portion and add
    it to the object as a new property. Do NOT create an new
    array, simply loop over the array. 
    Formula: recommendedFood = weight * 0.75 * 25. (The
    result is in grams of food, and the weight needs to be in kg).

    2. Find Sarah's dog and log to the console whether it's eating
    much or too little. HINT: Some dogs have multiple owners,
    so you first need to find Sarah in the owners array, so this one
    is a bit tricky (on purpose).

    3. Create an array containing all owners of dogs who eat
    too much ('ownersEatTooMuch') and an array with all owners of 
    dogs who eat too little.
    (ownersEatTooLittle).

    4. Log a string to the console for each array created in 3.,
    like this: "Matilda and Alice and Bob's dogs eat too much!"
    and "Sarah and John and Michale's dogs eat too little".

    5. Log to the console whether there is any dog eeating
    EXACTLY the amount of food that is recommeneded (just true or false).

    6. Log to the console whether there is any dog eating an 
    OKAY amount of food (just true or false)

    7. Create an array containing the dogs that are eating an okay
    amount of food (try to reuse the condition used in 6.)

    8. Create a shallow copy of the dogs array and sort it by
    recommended food portion in an ascending order (keep in 
    mind that the portions inside the array's object)

    HINT 1: Use many different tools to solve these challenges,
    you can use the summary lecture to choose between them
    HINT 2: Being within a range 10% above and below the recommended
    portion means: current > (recommended * 0.90) %% current < (recommended
    * 1.10). Basically, the current portion should be between 90%
    and 110% of the recommended portion.

    TEST DATA:
    const dogs = [
    {weight: 23, curFood: 250, owners: ['Alice', 'Bob;]},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {wdith: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']}
    ]

*/

const dogs = [
  { weight: 23, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
dogs.forEach(function (el) {
  el.recommendedFood = Math.trunc(el.weight ** 0.75 * 25);
  // console.log(el);
});

// Task 2
const sarahDog = dogs.find(el => el.owners.includes('Sarah'));
console.log(
  sarahDog.curFood > sarahDog.recommendedFood
    ? `Sarah's dog is eating too much`
    : "Sarah's dog eating too low"
);

// Task 3
const ownersEatTooMuch = dogs
  .filter(el => el.curFood > el.recommendedFood)
  .map(owner => owner.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(el => el.curFood < el.recommendedFood)
  .map(owner => owner.owners)
  .flat();
console.log(ownersEatTooLittle);

// Task 4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// Task 5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// Task 6
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// Task 7;
console.log(dogs.filter(checkEatingOkay));

// Task 8;
const shallowDog = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallowDog);
