//Задание 1:

/*
Дочерний калсс должен вызывать - super()

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  alert(rabbit.name); */




//Задание 2:

/*
class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision=1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  }; */