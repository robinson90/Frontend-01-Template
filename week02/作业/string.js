//匹配字符串字面量

const StringLiteral = /('SingleStringCharactersopt'|"DoubleStringCharactersopt")/
const DoubleStringCharacters = /DoubleStringCharacter DoubleStringCharactersopt /
const SingleStringCharacters = /SingleStringCharacter SingleStringCharactersopt/

const DoubleStringCharacter = /(SourceCharacter but not one of " or \ or LineTerminator|\ EscapeSequence|LineContinuation)/
const SingleStringCharacter = /(SourceCharacter but not one of ' or \ or LineTerminator |\ EscapeSequence|LineContinuation)/
// <LF>(\u000A) <CR>(\u000D) [lookahead  <LF> ] <LS>(\u2028) <PS>(\u2029) <CR> <LF> 
const LineContinuation = /[\\]n/
// console.log(LineContinuation.test('\n'))

// const EscapeSequence = /(CharacterEscapeSequence|HexEscapeSequence|UnicodeEscapeSequence|0  [lookahead  DecimalDigit])/
const EscapeSequence = /(CharacterEscapeSequence|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|0[lookahead  DecimalDigit])/

const CharacterEscapeSequence = /(^['"\\bfnrtv]$|NonEscapeCharacter)/

const SingleEscapeCharacter = /['"\\bfnrtv]/
// console.log(SingleEscapeCharacter.test("'"))
// console.log(SingleEscapeCharacter.test('\\'))
// console.log(SingleEscapeCharacter.test('b'))
// console.log(SingleEscapeCharacter.test('f'))
// console.log(SingleEscapeCharacter.test('n'))


// LineTerminator :: <LF>(n) <CR>(r) <LS> <PS> 
// const NonEscapeCharacter = 'SourceCharacter but not one of EscapeCharacter or LineTerminator'
const NonEscapeCharacter = /[^'"\\bfnrtv]/ //'SourceCharacter but not one of EscapeCharacter or LineTerminator'
// console.log(NonEscapeCharacter.test('\\'))
// console.log(NonEscapeCharacter.test('v'))
console.log(NonEscapeCharacter.test('\u2028'))
console.log(NonEscapeCharacter.test('\u2029'))

// const EscapeCharacter = /(SingleEscapeCharacter|DecimalDigit|x|u)/
const EscapeCharacter = /(^['"\\bfnrtv]$|^[0-9]$|x|u)/
const HexEscapeSequence = /x[0-9A-Fa-f]{2}/

const UnicodeEscapeSequence = /u[0-9A-Fa-f]{4}/