"use strict";

/*

  1. Use a constructor function to implement a Car.
  A car has a mke and a speed property. The speed property
  is the current speed of the car in km/h;

  2. Implement an 'accelerate' method that will increase
  the car's speed by 10, and log the new speed to the
  console;

  3. Implement a 'brake' method that will decrease the
  car's speed by 5, and log the new speed to the console;

  4. Create 2 car objects and experiment will calling
  'accelerate' and 'brake' multiple times on each of
  them.

  DATA CAR 1: 'BMW' going at 120 km/h
  DATA CAR 2: 'Mercedes' going at 95 km/h

*/

/*

  1. Re-create challenge 1, but this time using an ES6 class;

  2. Add a getter called 'speedUS' which returns the
  current speed in mi/h (divide by 1.6)

  3. Add a setter called 'speedUS' which sets the
  current speed in mi/h (but converts it to km/h before
  storing the value, by multiplying the input by 1.6);

  4. Create a new car and experiment with the accelerate
  and brake methods, and with the getter and setter.

  DATA CAR 1: 'Ford' going at 120 km/h

  GOOD LUCK 🛩️
*/

// class Car {
//   constructor(make, currentSpeed) {
//     this.make = make;
//     this.speed = currentSpeed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

/*

  1. Use a constructor function to implement an
  Electric Car (called EV) as a CHILD "class" of Car.
  Because a make and current speed, the EV also has
  the current battery charge in % ('charge' property).

  2. Implement an 'chargeBattery' method which takes an
  argument 'chargeTo' and sets the battery charge
  to 'chargeTo'.

  3. Implement an 'accelerate' method that will
  increase the car's speed by 20, and decrease the 
  charge by 1%. Then log a message like this: 'Tesla
  is going at 140 km/h, with a charge of 22%;

  4. Create an electric car object and experiment with
  calling 'accelerate', 'brake' and 'chargeBattery'
  (charge to 90%). Notice what happens when you 'accelerate'!
  HINT: Review the definition of polymorphism

  DATA CAR 1: 'Tesla' going at 120km/h, with a charge
  of 23%

  GOOD LUCK

*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, currentSpeed, charge) {
//   Car.call(this, make, currentSpeed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function (speed) {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV("Tesla", 120, 23);
// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.accelerate();
// console.log(tesla);

/*

  1. Re-create challenge #3, but this time using ES6
  classes: create an 'EVCl' child class of the 'CarCl'
  class.

  2. Make the 'charge' property private:

  3. Implement the ability to chain the 'accelerate'
  and 'chargeBattery' methods of this class, and also update
  the 'brake' method in the Car class. They experiment with 
  chaining!

  DATA CAR 1: 'Rivian' going at 120 km/h, with a charge
  of 23%

  GOOD LUCK 🎉

*/

class CarCl {
  constructor(make, currentSpeed) {
    this.make = make;
    this.speed = currentSpeed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
// rivian.chargeBattery(90);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
