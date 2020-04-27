// function stringToNumber (s, x = 10) {
//   const numberList = [...s];
//   let number = 0;

//   let i = 0;
//   while (i < numberList.length && numberList[i] !== '.') {
//     number = number * x;
//     number += numberList[i].codePointAt(0) - '0'.codePointAt(0);
//     i++;
//   }

//   while (numberList[i] === '.') {
//     i++;
//   }

//   let fraction = 1;
//   while (i < numberList.length) {
//     fraction = fraction / x;
//     number += (numberList[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
//     i++;
//   }
//   console.log(number)
//   return numberList
// }

// console.log(stringToNumber('12.89'))
// console.log(stringToNumber('12.89e10'))


