function UTF8_Encoding () {

}

//匹配字符串字面量

const StringLiteral = /('SingleStringCharactersopt'|"DoubleStringCharactersopt")/
const DoubleStringCharacters = /DoubleStringCharacter DoubleStringCharactersopt /
const SingleStringCharacters = /SingleStringCharacter SingleStringCharactersopt/

const DoubleStringCharacter = /(SourceCharacter but not one of " or \ or LineTerminator|\ EscapeSequence|LineContinuation)/
const SingleStringCharacter = /(SourceCharacter but not one of ' or \ or LineTerminator |\ EscapeSequence|LineContinuation)/

const LineContinuation = /\ LineTerminatorSequence/

const EscapeSequence = /(CharacterEscapeSequence|HexEscapeSequence|UnicodeEscapeSequence|0  [lookahead  DecimalDigit])/

const CharacterEscapeSequence = /(SingleEscapeCharacter|NonEscapeCharacter)/

const SingleEscapeCharacter = /['"\\bfnrtv]/

const NonEscapeCharacter = 'SourceCharacter but not one of EscapeCharacter or LineTerminator'
const EscapeCharacter = /(SingleEscapeCharacter|DecimalDigit|x|u)/
const HexEscapeSequence = /x HexDigit{2}/

const UnicodeEscapeSequence = /u HexDigit{4}/