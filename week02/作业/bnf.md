编写带括号的四则运算产生式

<PrimaryExpression> ::= <DecimalNumber> |
"(" <LogicalExpression> ")"

<LogicalExpression> ::= <AdditiveExpression> |
<LogicalExpression> "||" <AdditiveExpression> |
<LogicalExpression> "&&" <AdditiveExpression>

<AdditiveExpression> ::= <MultiplicativeExpression> |
<AdditiveExpression> "+" <MultiplicativeExpression>|
<AdditiveExpression> "-" <MultiplicativeExpression>

<MultiplicativeExpression> ::= <PrimaryExpression> |
<MultiplicativeExpression> "*" <PrimaryExpression>|
<MultiplicativeExpression> "/" <PrimaryExpression>

<DecimalNumber>::= "0" | (("1" ~ "9") <Number>*)

<Number>::= "0" | "1" ... "9"