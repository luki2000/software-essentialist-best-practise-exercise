Description: Create a boolean calculator that takes a boolean expression (as a string) and evaluates it to compute the correct output boolean result

Single values
"TRUE" -> true "FALSE" -> false

NOT operartor
"NOT TRUE" -> false

AND operator
"TRUE AND FALSE" -> false "TRUE AND TRUE" -> true

OR operator
"TRUE OR FALSE" -> true "FALSE OR FALSE" -> false

Combination of operators w/ precedence

Order of priority (operation to be done first)
1. NOT
2. AND
3. OR
"TRUE OR TRUE OR TRUE AND FALSE" -> true "TRUE OR FALSE AND NOT FALSE" -> true

Paranthesis
"(TRUE OR TRUE OR TRUE) AND FALSE" -> false "NOT (TRUE AND TRUE)" -> false

------
Observation
1. operators have their real programming counterpart:
NOT = !
OR = ||
AND = &&

2. As well as the string capital boolean 
TRUE = true
FALSE = false

3. Order of precedence is natively there if i can convert from the string operators and booleans

4. The quesion is, can I natively combine them all (e.g using the Booelan constructor?). Can I split them concatenate or the values in an expression?
UPDATE: 
it doesn't seem possible, cannot add expression in a boolean constructor

6. second alternative is to use eval() but this is highly discouraged because it can leave an application vulnerable, an attacker could put a malicious executable code in string
 and eval method will execute it.


