// 0b
// 0o
// 0x
// 0.
// .0
// 12.6e8
// 12.5E6
// NumericLiteral 
// 写一个正则匹配所有Number直接量

const HexDigit = /[0-9A-Fa-f]/
const HexIntegerLiteral = /0[xX][0-9A-Fa-f]+/
const SignedInteger = /[+-]*[0-9]+/
const ExponentIndicator = /[eE]/
// ExponentPart :: ExponentIndicator SignedInteger 
const ExponentPart = /[eE][+-]*[0-9]+/;
const NonZeroDigit = /[1-9]/
const DecimalDigit = /[0-9]/
const DecimalDigits = /[0-9]+/ //DecimalDigits :: DecimalDigit |DecimalDigits DecimalDigit 
const DecimalIntegerLiteral = /(0|[1-9][0-9]*)/
// const DecimalLiteral = /(DecimalIntegerLiteral.DecimalDigits* ExponentPart* |. DecimalDigits ExponentPart*|DecimalIntegerLiteral ExponentPart*)/
const DecimalLiteral = /((0|[1-9][0-9]*).[0-9]* ([eE][+-]*[0-9]+)* |.[0-9]+([eE][+-]*[0-9]+)*|(0|[1-9][0-9]*)([eE][+-]*[0-9]+)*)/

// const NumericLiteral = /(DecimalLiteral|HexIntegerLiteral)/
const NumericLiteral = /(((0|[1-9][0-9]*).[0-9]* ([eE][+-]*[0-9]+)* |.[0-9]+([eE][+-]*[0-9]+)*|(0|[1-9][0-9]*)([eE][+-]*[0-9]+)*)|0[xX][0-9A-Fa-f]+)/

console.log(NumericLiteral.test(0x78A))
console.log(NumericLiteral.test(.6))