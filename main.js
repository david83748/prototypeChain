/* eslint-disable func-names */
/* eslint-disable no-console */
function Organism() {}
Organism.prototype.isAlive = function () {
  return this.age < 110;
};

function Creature() {}
Creature.prototype = Object.create(Organism.prototype);
Creature.prototype.constructor = Creature;
Creature.prototype.getAge = function () {
  return this.age;
};

function Person() {}
Person.prototype = Object.create(Creature.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayHi = function () {
  return `Hello, ${this.name}`;
};

function Boy(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Boy.prototype = Object.create(Person.prototype);
Boy.prototype.constructor = Boy;
Boy.prototype.getFavoriteColor = function () {
  return this.color;
};

function Girl(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

Girl.prototype = Object.create(Person.prototype);
Girl.prototype.constructor = Girl;
Girl.prototype.getFavoriteColor = function () {
  return this.color;
};

const john = new Boy('John', 33, 'Blue');
console.log(john.getAge());
console.log(john.sayHi());
console.log(john.isAlive());
console.log(john.getFavoriteColor());

const anna = new Girl('Anna', 120, 'Red');

console.log(anna.getAge());
console.log(anna.sayHi());
console.log(anna.isAlive());
console.log(anna.getFavoriteColor());
