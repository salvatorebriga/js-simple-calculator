'use strict'

addNumber();

function addNumber(){

    const numbers = document.querySelectorAll('.numbers');

    let numbersLenght = numbers.length;

    for(let i = 0; i < numbersLenght; i++){
        numbers[i].addEventListener('click', function(){
            document.getElementById('display').innerHTML += numbers[i].value;
        })
    }
}