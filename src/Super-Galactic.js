class Person {
    constructor(age) {
      this.age = age;
    }
  
    mercuryAge() {
      return Math.round(this.age / 0.24);
    }
  }