let number1 = 0;
let number2 = 0;
let operator = "";
let result = 0;

function sum(a, b){
    return a + b
};

function sub(a, b){
    return a - b
};

function multiply(a, b){
    return a * b
};

function divide(a, b){
    return a / b
};

function operate(number1, number2, operator){
    if (operator == "+"){
        result = sum(number1, number2);
    }
    else if (operator == "-"){
        result = sub(number1, number2);
    }
    else if (operator == "/"){
        if (number2 == 0){
            result = "Can't divide by zero";
        }
        else {
            result = divide(number1, number2);
        }
    }
    else if (operator == "*"){
        result = multiply(number1, number2);
    }
    return result;
};

console.log("Sum:" + " " + sum(2, 2));
console.log("Substraction:" + " " + sub(4, 2));
console.log("Division:" + " " + operate(4, 0, "/"));
console.log("Multiplication:" + " " + multiply(4, 2));