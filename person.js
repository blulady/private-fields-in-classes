class Person {
  constructor(name, age) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000);
  }
  getID() {
    return this.id;
  }
}

module.exports = Person;
