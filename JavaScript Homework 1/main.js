// exercise 1

function calculate (a, b) {
    if (a===b){
        return "equal"
    }
    else {
        return "not equal"
    }
}

console.log (calculate(20,20))
console.log (calculate (19,54))
console.log (calculate ("2", 2))


// exercise 2

let fahrenheit = 75;
let celcius = (fahrenheit - 32) * 5/9; 
console.log (celcius);



// exercise 3
function myFunction (a, b, operation) {
    // Check if a and b are numbers
    if (isNaN(a) || isNaN(b)) {
      return false;
    }

    if (operation === '+') {
      return a + b;
    } else if (operation === '-') {
      return a - b;
    } else if (operation === '*') {
      return a * b;
    } else if (operation === '/') {
      return a / b;
    } else {
      return false;
    }
  }
  
  const sum = myFunction (20, 2, '+');
  console.log(sum);
  
  const subtract = myFunction (20, 2, '-');
  console.log(subtract);

  const multiply = myFunction (20, 2, '*');
  console.log(multiply);

  const divide = myFunction (20, 2, '/');
  console.log(divide);