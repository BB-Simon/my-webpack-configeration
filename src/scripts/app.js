import { name } from "./name";
import "../scss/style.scss";

const sayHi = (name) => {
  console.log(`Hello ${name}`);
};

sayHi(name);

class A {
  x = 25;
  y = 15;

  add() {
    return this.x + this.y;
  }
}

let a = new A();
console.log(a.add());
