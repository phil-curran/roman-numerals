function numberConverter(number) {

  console.log(`The number you entered is: ${number}`);
  
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
    if (number >= 4000) {
      console.log("Error number too high");
    } else if (number >= 1000) {
      reducerLoop(number, "M", 1000);
    } else if (number <= 999 && number >= 900) {
      reducerLoop(number, "CM", 900);
    } else if (number < 900 && number >= 500) {
      reducerLoop(number, "D", 500);
    } else if (number <= 499 && number >= 400) {
      reducerLoop(number, "CD", 400);
    } else if (number < 400 && number >= 100) {
      reducerLoop(number, "C", 100);
    } else if (number <= 99 && number >= 90) {
      reducerLoop(number, "XC", 90);
    } else if (number < 90 && number >= 50) {
      reducerLoop(number, "L", 50);
    } else if (number <= 49 && number >= 40) {
      reducerLoop(number, "XL", 40);
    } else if (number <= 39 && number >= 10) {
      reducerLoop(number, "X", 10);
    } else if (number === 9) {
      reducerLoop(number, "IX", 9);
    } else if (number <= 8 && number >= 5) {
      reducerLoop(number, "V", 5);
    } else if (number === 4 ) {
      reducerLoop(number, "IV", 4);
    } else if (number <= 3 && number > 0) {
      reducerLoop(number, "I", 1);
    }
  }
    
  numberLadder(number);
  console.log(`Your number converted to Roman Numerals is: ${romanNumeral.join('')}`);
}

// test cases
numberConverter(1);
numberConverter(2);
numberConverter(3);
numberConverter(4);
numberConverter(5);
numberConverter(9);
numberConverter(10);
numberConverter(19);
numberConverter(40);
numberConverter(50);
numberConverter(90);
numberConverter(100);
numberConverter(101);
numberConverter(110);
numberConverter(400);
numberConverter(488);
numberConverter(900);
numberConverter(1245);
numberConverter(3525);
numberConverter(3999);
numberConverter(4000);