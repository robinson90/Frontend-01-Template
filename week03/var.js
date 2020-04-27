var x = 0;

function foo () {
  var obj = {x: 1};
  x = 2;
  with (obj) {
    // var x = 3;
    // x = 3;
  }
  

  if (false) {
    // var x = 1;
  }

  console.log(x);

  // return;

  // var x = 3;
}

foo()
console.log(x)