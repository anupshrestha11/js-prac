class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person("Anup", "Shrestha");
console.log(person1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fighting Crime");
  }
}

const batman = new SuperHero("Clark", "Kent");
console.log(batman.sayMyName());
