function numberToString (number, x = 10) {

  // 截断、舍入
  let integer = Math.floor(number);
  const fraction = number - integer;
  let str = '';
  while (integer > 0) {
    str = String(integer % x) + str;
    integer = Math.floor(integer / x)
  }
  console.log(str)
  return str;
}

console.log(numberToString(345.907))

var foo = function (a,b) {
  console.log(Object.prototype.toString(a))
  console.log(arguments)
}