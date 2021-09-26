console.log("Welcome to calculator.js!")

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let total = 0.0

console.log("Current total: " + total)
console.log()
rl.question("Enter operation (+-*/, q to quit): ", (operator) => {
    rl.question("Enter value: ", (value) => {
      calculate(value, operator)
      rl.close()
    });
});

function calculate(val, operator){
  if(operator === '+'){
    total += val
  }else if(operator === '-'){
    total -= val
  }else if(operator === '*'){
    total *= val
  }else if(operator === '/'){
    if(val == 0){
      console.log(`Can't divide by zero!`)
    }else{
      total /= val
    }
  }
  console.log(`Current total: ` + total)
}
