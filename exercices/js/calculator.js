const operator = prompt("enter operation that you want to use (+,-,/,*): ");
const calcNumOne = parseFloat(prompt("Enter first number:"));
const calcNumTwo = parseFloat(prompt("Enter second number:"));

switch(operator){
    case "+" :
        result = calcNumOne + calcNumTwo;
        console.log(`${calcNumOne} + ${calcNumTwo} = ${result}`);
        break;

    case "-" :
        result = calcNumOne - calcNumTwo;
        console.log(`${calcNumOne} - ${calcNumTwo} = ${result}`);
        break;
    case "*" :
        result = calcNumOne * calcNumTwo;
        console.log(`${calcNumOne} * ${calcNumTwo} = ${result}`);
        break;

    case "-" :
        result = calcNumOne / calcNumTwo;
        console.log(`${calcNumOne} / ${calcNumTwo} = ${result}`);
        break;

    default:
        console.log("invalid operator, please choose one of the following: (+, -, *, /)");
        break;
}