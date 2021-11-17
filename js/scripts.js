/*

Problem: Write a method to convert numbers into Roman numerals. 

Roman numerals are based on seven symbols:

Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000

The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, 
you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and 
instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. 
You cannot count higher than 3,999 in Roman numerals.

Do not add any UI logic until you've completed your business logic (and included testing).

*/

// first, convert arabic numbers to roman numerals

// use regex for identifying numbers or number combos (I, IV, IX, XC, etc.)
// use modulus to 'strip' leading character(s) from number string.
/* do we need to have some sort of if / else statement for dealing with 'classes' 
 of numbers?  i.e. < 100, < 1,000, etc. */

// then, convert roman numerals to arabic numbers after solving first problem

function numberConverter(number) {

  let romanNumeral = [];
  
// reducerFunction
function reducerLoop(number, numeral, reducer) {
    for (let i = number; i >= reducer;) {
      romanNumeral.push(numeral);
      i -= reducer;
      if (i < reducer) {
        numberLadder(i);
      }
    }
  }

  function numberLadder(number) {
    if (number >= 1000) {
      reducerLoop(number, "M", 1000);
    } else if (number <= 999 && number >= 500) {
      reducerLoop(number, "D", 500);
    } else if (number <= 499 && number >= 100) {
      reducerLoop(number, "C", 100);
    } else if (number <= 99 && number >= 50) {
      reducerLoop(number, "L", 50);
    } else if (number <= 49 && number >= 10) {
      reducerLoop(number, "X", 10);
    } else if (number <= 9 && number >= 5) {
      reducerLoop(number, "V", 5);
    } else if (number <= 4 && number > 0) {
      reducerLoop(number, "I", 1);
    }    
  }
  
  numberLadder(number);
  console.log(`Your number converted to Roman Numerals is: ${romanNumeral.join('')}`);
};

// test cases
numberConverter(1);
numberConverter(2);
numberConverter(3);
numberConverter(4);
numberConverter(5);
numberConverter(9);
numberConverter(10);
numberConverter(19);
numberConverter(90);
numberConverter(100);
numberConverter(101);
numberConverter(110);
numberConverter(1245);
numberConverter(3525);