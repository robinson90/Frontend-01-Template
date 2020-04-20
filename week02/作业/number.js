// 0b
// 0o
// 0x
// 0.
// .0
// 12.6e8
// 12.5E6
// NumericLiteral 
// 写一个正则匹配所有Number直接量

const HexDigitReg = /[0-9A-Fa-f]/
const HexIntegerLiteralReg = /(0x|0X)[0-9A-Fa-f]+/
const SignedIntegerReg = /(+|-)DecimalDigitsReg/
const ExponentIndicatorReg = /(e|E)/
const ExponentPartReg = /(e|E)SignedIntegerReg/
const NonZeroDigitReg = /[1-9]/
const DecimalDigitReg = /[0-9]/
const DecimalDigitsReg = /[0-9]+/
const DecimalIntegerLiteralReg = /(0|[1-9]DecimalDigitsoptReg)/
const DecimalLiteralReg = /(DecimalIntegerLiteralReg.DecimalDigitsopt ExponentPartopt |. DecimalDigits ExponentPartopt|DecimalIntegerLiteral ExponentPartopt)/

const NumericLiteralReg = /(DecimalLiteral|HexIntegerLiteral)/