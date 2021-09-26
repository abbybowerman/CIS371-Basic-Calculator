console.log("Welcome to calculator.js!")

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

program(0)

function program(total){
  console.log("Current total: " + total)
  console.log()
  rl.question("Enter operation (+-*/, q to quit): ", (operator) => {
    if(operator === 'q'){
      console.log(`Final total: ` + total)
      rl.close()
    }else{
      rl.question("Enter value: ", (value) => {
        total = calculate(value, operator, total)
        program(total)
      });
    }
  });
}

function calculate(val, operator, total){
  num = Number(val)
  
  if(!isNaN(num)){
    if(operator === '+'){
      total += +val
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
    }else{
      console.log(operator + ` is not a valid operator`)
    }
  }else{
    console.log(val + ` is not a number`)
  }
  
  return total
}
