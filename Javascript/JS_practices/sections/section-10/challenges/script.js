"use strict";
/*
Challenge 1

  Let's build a simple poll app!

  A poll has a question, an array of options from which people
  can choose, and an array with the number of replies for each
  option. This data is stored in the  starter object below.

  Here are your task:

  1. Create a method called 'registerNewAnswer' on the
  'poll' object. The method does 2 things:
  1.1 Display a prompt window for the the user to
  input the number of the selected option. The prompt
  should look like this:
        What is your favourite programming language?
        0: Javascript
        1: Python
        2: Rust
        3: C++
          (Write option number)
  
  1.2 Based on the input number, update the answers array. For 
  example, if the option is 3, increase the value AT POSITIION 3 
  of the array by 1. Make sure to check if the input is a number
  and if the input is a number and if the number makes sense
  (e.g answer 52 wouldn't make sense, right?)

  2. Call this method whenever the user click the "Answer poll"
  button.
  
  3. Create a method 'displayResults' which displays the poll results.
  The methods takes a string as an input (called 'type'), which
  can be either 'string' or 'array'. If type is 'array' simply display
  the results array as it is, using console.log(). This should be the
  default option. If type is 'string', display as string ike "Poll results
  are 13, 2, 4, 1".

  4. Run the 'displayResults' method as the end of each 
  'registerNumber' method call.

  HINT: Use many of the tools you learned about in this and the last
  section.

  BONUS: Use the 'displayREsults method to display the 2 arrays in the 
  test data. USe both the'array' and the 'string' option. Do not put the'
  arrays in the poll object! So what the this keyword look like in this situation?

  BONUS TEST DATA 1: [5, 1, 3]
  BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

*/

const script = "Declarative Environement Record";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const userPrompt = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    if (typeof userPrompt === "number" && userPrompt < this.answers.length) {
      this.answers[userPrompt]++;
      console.log(this.answers);
    }
    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are: ${this.answers.join(", ")}`);
    }
  },
};
console.dir(poll.registerNewAnswer);
const answerPoll = poll.registerNewAnswer;
document
  .querySelector(".poll")
  .addEventListener("click", answerPoll.bind(poll));

/*

  This is more of a thinking challenge 
  than a coding challenge 🧐


  Take the IIFE below and at the end of the function, 
  attach an event listener than changes the color 
  of the selected h1 element ('header') to blue, 
  each time the BODY element is clicked. 
  Do NOT select the h1 element again!

  And now explain to YOURSELF (or someone around you) WHY this worked!
  Take all the time you need. Think about WHEN exactly the 
  callback function is executed, and what that means for the 
  variables involved in this example.

  GOOD LUCK 🎉

*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  // This is because of closure
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

/*
The "object Environment Record" is the record 
that uses the properties of the global object 
for the var-scoped bindings.
 This is what V8 calls Global under [[Scopes]].

 
The "declarative Environment Record"
 is the record that holds the lexically-scoped 
 bindings (directly, not in a separate object).
  This is what V8 calls Script under [[Scopes]]
*/
