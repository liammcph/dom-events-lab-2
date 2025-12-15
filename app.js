/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let num1 = ''
let num2 = ''
let operator = ''
let operatorEntered = false 

display.textContent = '0'

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  

  // Example
  if (event.target.classList.contains('number')) {
     if (operatorEntered === false) {
        num1 = num1 + event.target.innerText;
        console.log(num1)
        display.textContent = num1

     }
     if (operatorEntered === true) {
        num2 = num2 + event.target.innerText;
        console.log(num2)
        display.textContent = `${num1}${operator}${num2}`
     }
  }

  // Example
  if (event.target.innerText === '*') {
    operatorEntered = true
    operator = event.target.innerText
    console.log(operator)
    display.textContent = `${num1}*`
  }
  if (event.target.innerText === '/') {
     operatorEntered = true
     operator = event.target.innerText
     console.log(operator)
     display.textContent = `${num1}/`
  }
  if (event.target.innerText === '-') {
     operatorEntered = true
     operator = event.target.innerText
     console.log(operator)
     display.textContent = `${num1}-`
     
  }
  if (event.target.innerText === '+') {
     operatorEntered = true
     operator = event.target.innerText
     console.log(operator)
     display.textContent = `${num1}+`
  }
  if (event.target.innerText === '=') {
        console.log('=')
        answer = calc(num1, num2, operator)
        console.log(answer)
        display.textContent = answer
  }
   if (event.target.innerText === 'C') {
       operatorEntered = false
       num1 = ['']
       num2 = ['']
       console.log('clear')
       display.textContent = '0'
  }
  
});

/*-------------------------------- Functions --------------------------------*/
function calc(num1, num2, operator) {
    if (operator === '+') return Number(num1) + Number(num2);;
    if (operator === '-') return Number(num1) - Number(num2);;
    if (operator === '*') return Number(num1) * Number(num2);;
    if (operator === '/') return Number(num1) / Number(num2);

}