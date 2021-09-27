/********************************************************************** 
 * This is a basic calculator in JavaScript for CIS 371.
 * It uses Node.js.
 * Command to run: node calculator.js
 * 
 * @author Abigail Bowerman
 * @version Fall 2021
**********************************************************************/

//the program welcomes you :)
console.log("Welcome to calculator.js!")

//setup readline for user input
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//runs the main function that will run until the
//user specifies quit
//having a parameter 0 specifies that the current total is 0
program(0)

/**********************************************************************
 * The main function to run the calculator.
 * 
 * @parm total the current total 
**********************************************************************/
function program(total){
  //displays current total with 2 digits after decimal
  console.log()
  console.log("Current total: " + total.toFixed(2))
  console.log()

  //gets user input for operator
  rl.question("Enter operation (+-*/, q to quit): ", (operator) => {
    if(operator === 'q'){
      console.log(`Final value: ` + total.toFixed(2))
      rl.close()
    }else{
      //gets user input for numerical value
      rl.question("Enter value: ", (value) => {
        total = calculate(value, operator, total)
        //allows the calculator to keep running as long as the user
        //doesn't want to quit
        program(total)
      });
    }
  });
}

/**********************************************************************
 * function that does the calcuation and returns the total
 * 
 * @parm val the user entered numerical value
 * @parm operator the user entered operator
 * @parm total the current running total
 * @returns the total after the calculation 
**********************************************************************/
function calculate(val, operator, total){
  //variable num is used to check if the user typed in a valid number
  num = Number(val)
  
  if(!isNaN(num)){ //if the user input is a number
    if(operator === '+'){ //calcuate addtion
      total += +val
    }else if(operator === '-'){ //calculate subtraction
      total -= val
    }else if(operator === '*'){ //calculate multiplcation
      total *= val
    }else if(operator === '/'){ //calculate division
      if(val == 0){ //handles user input = 0
        console.log(`Can't divide by zero!`)
      }else{
        total /= val
      }
    }else{ //if the operator isn't valid
      console.log(operator + ` is not a valid operator`)
    }
  }else{ //if the user input isn't a number
    console.log(val + ` is not a number`)
  }
  
  //return new total
  return total
}
