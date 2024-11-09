#! /usr/bin/env ts-node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: 'enter firstNumber',
        name: 'firstNumber',
        type: 'number',
    },
    {
        message: 'enter secondNumber',
        name: 'secondNumber',
        type: 'number',
    },
    {
        message: 'Select one of below operators to perform  action operation',
        type: 'list',
        name: 'OPERATORS',
        choices: ['Addition', "Subtraction", 'Multiplication', 'Division', 'Percentage'],
    },
]);
// conditional statement 
if (answer.OPERATORS === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.OPERATORS === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.OPERATORS === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.OPERATORS === 'Division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.OPERATORS === 'Percentage') {
    console.log(answer.firstNumber / answer.secondNumber * 100);
}
else {
    console.log('Please select a valid operator');
}
