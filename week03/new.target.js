function foo () {
  console.log('this', this)
  console.log('new.target', new.target)
}

console.log(foo())

console.log('new', new foo())

const fackObj = {};
Object.setPrototypeOf(fackObj, foo.prototype)

fackObj.constructor = foo;

foo.apply(fackObj)

// 比较 prototype
console.log(fackObj instanceof foo)

// 等号左边的值运行时必须是 Reference；语法上必须是 leftHandSide

// updateExpression :: leftHandSide 不能有换行符 ++

