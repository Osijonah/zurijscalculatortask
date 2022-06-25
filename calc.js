let firstNumber = parseInt(prompt('Enter first number: '));
let secondNumber = parseInt(prompt('Enter second number: '));
let operator = prompt('Enter the sign of the desired operation: ');
let solution;
if(operator=='+'){
  solution = firstNumber+secondNumber;
}
if(operator=='-'){
 solution = firstNumber-secondNumber;
}else if(operator=='*'){
 solution = firstNumber*secondNumber;
}else if(operator=='/'){
  solution = firstNumber/secondNumber;
}
else{
  console.log('error!')
}

console.log(solution);
