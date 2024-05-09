'use strict'

let num = 0;

let op = '';

addNumber();
storeVariables();

function addNumber(){

    const numbers = document.querySelectorAll('.numbers');

    let numbersLenght = numbers.length;

    for(let i = 0; i < numbersLenght; i++){
        numbers[i].addEventListener('click', function(){
            document.getElementById('display').innerHTML += numbers[i].value;
        })
    }
}

function storeVariables(){
    const operators = document.querySelectorAll('.operators');

    let operatorsLenght = operators.length;

    for(let i = 0; i < operatorsLenght; i++){
        operators[i].addEventListener('click', function(){

            num = document.getElementById('display').innerHTML;

            num = parseInt(num);

            op = operators[i].value;

            document.getElementById('display').innerHTML = "";
        })
    }
}