'use strict'

let num = 0;

let op = '';

addNumber();
storeVariables();
equals();
canc();

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

function equals(){

    const equals = document.querySelector('.equals');

    equals.addEventListener('click', function(){

        let num2 = document.getElementById('display').innerHTML;

        num2 = parseInt(num2);

        switch(op){
            case '+':
                num += num2;
                document.getElementById('display').innerHTML = num;
                break;
            case '-':
                num -= num2;
                document.getElementById('display').innerHTML = num;
                break;
            case '*':
                num = num * num2;
                document.getElementById('display').innerHTML = num;
                break;
            case '/':
                if(num2 == 0){
                    document.getElementById('display').innerHTML = 'Error!!!';
                    num = 0;
                    op = '';
                    setTimeout(() => {
                        document.getElementById('display').innerHTML = '';
                    }, 2000);
                    break
                }
                num = num / num2;
                document.getElementById('display').innerHTML = num;
                break;
        }
    })
}

function canc(){
    const canc = document.querySelector('.ce');

    canc.addEventListener('click', function(){
        num = 0;
        op = '';

        document.getElementById('display').innerHTML = '';
    })
}