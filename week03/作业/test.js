class a {
  constructor(x) {
    this.x = x;
  }
}

function foo (x) {
  console.log(...arguments)
  console.log(new.target)
  this.b = x
}
const bindA = foo.bind(a)
console.log(new bindA('a', 'hj', {c: 'c'}))