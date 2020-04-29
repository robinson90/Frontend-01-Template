## ordinary objects

## exotic objects
* Bound Function Exotic Objects([bind()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind))
  * [[Call]]
  ```
    this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
    var module = {
      x: 81,
      getX: function() { return this.x; }
    };

    module.getX(); // 81

    var retrieveX = module.getX;
    retrieveX();   
    // 返回 9 - 因为函数是在全局作用域中调用的

    // 创建一个新函数，把 'this' 绑定到 module 对象
    // 新手可能会将全局变量 x 与 module 的属性 x 混淆
    var boundGetX = retrieveX.bind(module);
    boundGetX(); // 81
  ```

  * [[Construct]] 
  ```
  class a {
    constructor(x) {
      this.x = x;
    }
  }

  function foo (x) {
    this.b = x
  }
  const bindA = foo.bind(a)
  console.log(new bindA('a'))

  ``` 
  * BoundFunctionCreate
* Array Exotic Objects
  * the "length" property
  ```
  const a = []
  console.log(a.length)
  a.push(3)
  a.push(4)
  console.log(a.length)
  console.log(a)
  a[100]
  console.log(a.length)
  console.log(a)
  a.length = 100;
  console.log(a)
  a["1"] === a[1]

  ```

  *  [[DefineOwnProperty]]
  * ArrayCreate
  ```
  var b = new Array(-1) // Uncaught RangeError: Invalid array length
  var b = new Array(3)
  ```
  * ArraySpeciesCreate
  ```
    a.splice

  ```
  * ArraySetLength
* String Exotic Objects
  * [[GetOwnProperty]] 
  * [[DefineOwnProperty]]
  * [[OwnPropertyKeys]] 
  * StringCreate
  * StringGetOwnProperty

Arguments Exotic Objects
Integer-Indexed Exotic Objects 
Module Namespace Exotic Objects 
Immutable Prototype Exotic Objects 

## 词汇
except for: 除了
explicitly: 明确地
specified: 指定的
otherwise: 除此以外
nonnegative：非负的
constraint: 约束
derived: 派生的
intrinsic: 固有
absent: 缺失

encapsulates：封装
exposes: 暴露
corresponding: 相应
