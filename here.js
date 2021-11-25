class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
      this.hi()
    }

    hi(){
        console.log("ruummmm!");
        this.#age()
    }
    #age() {
      let date = new Date();
      console.log(this.year);
    }
  }

let Corola = new Car("corola",3);
