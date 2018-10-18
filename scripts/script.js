import calculate from './calculate';

const displayUp = document.getElementsByClassName("display")[0];
const displayDown = document.getElementsByClassName("display")[1];

// number buttons:
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");

const dotButton = document.getElementById("dot");

const deleteButton = document.getElementById("delete");
const acButton = document.getElementById("ac");

// operation buttons:
const divisionButton = document.getElementById("division");
const multiplicationButton = document.getElementById("multiplication");
const subtractionButton = document.getElementById("subtraction");
const additionButton = document.getElementById("addition");
const equalButton = document.getElementById("equal");

let op1 = null;
let op2 = null;
let result = null;
let isCalculatedAfterEqualButton = false;
let globalOperator = null;

const OPERATOR_ADD = "+";
const OPERATOR_SUB = "-";
const OPERATOR_MULT = "*";
const OPERATOR_DIV = "/";

const isFirstOperandEntered = () => {
    return (op1 != null && globalOperator != null);
};

const makeCalculation = () => {
    if (displayDown.innerHTML === "") {
        return;
    }
    op2 = displayDown.innerHTML;
    try {
        result = calculate(op1, globalOperator, op2);
    } catch(e) {
        alert('Ошибка ' + e.name + ":" + e.message);
    }
    displayUp.innerHTML = result + globalOperator;
    op1 = result;
    op2 = null;
    displayDown.innerHTML = "";
};

const addFirstOperandAndOperation = () => {
    op1 = displayDown.innerHTML;
    displayUp.innerHTML = op1 + globalOperator;
    displayDown.innerHTML = "";
    isCalculatedAfterEqualButton = false;
    op2 = null;
};

const enterNumber = (num) => {
    if (!isCalculatedAfterEqualButton) {
        console.log(displayDown.innerHTML.length);
        if (displayDown.innerHTML.length === 1 && displayDown.innerHTML.slice(-1) === "0") {
            if (num === "0") {
                return;
            }
            displayDown.innerHTML = num;
            return;
        }
        displayDown.innerHTML += num;
    } else {
        displayUp.innerHTML = "";
        displayDown.innerHTML = num;
        isCalculatedAfterEqualButton = false;
        op1 = op2 = result = globalOperator = null;
    }
};

const enterDot = () => {
    if (isCalculatedAfterEqualButton) {
        displayUp.innerHTML = "";
        displayDown.innerHTML = "0.";
        isCalculatedAfterEqualButton = false;
        op1 = op2 = result = globalOperator = null;
        return;
    }
    if (displayDown.innerHTML.length === 0) {
        displayDown.innerHTML = "0.";
        return;
    }
    if (displayDown.innerHTML.includes(".") === true) {
        return;
    }
    displayDown.innerHTML += ".";
};

oneButton.onclick = () => {
    enterNumber("1");
};

twoButton.onclick = () => {
    enterNumber("2");
};

threeButton.onclick = () => {
    enterNumber("3");
};

fourButton.onclick = () => {
    enterNumber("4");
};

fiveButton.onclick = () => {
    enterNumber("5");
};

sixButton.onclick = () => {
    enterNumber("6");
};

sevenButton.onclick = () => {
    enterNumber("7");
};

eightButton.onclick = () => {
    enterNumber("8");
};

nineButton.onclick = () => {
    enterNumber("9");
};

zeroButton.onclick = () => {
    enterNumber("0");
};

dotButton.onclick = () => {
    enterDot();
};

deleteButton.onclick = () => {
    displayDown.innerHTML = displayDown.innerHTML.substring(0, displayDown.innerHTML.length - 1);
};

acButton.onclick = () => {
    displayDown.innerHTML = "";
    displayUp.innerHTML = "";
    op1 = op2 = result = operator = null;
    isCalculatedAfterEqualButton = false;
};

additionButton.onclick = () => {
    globalOperator = OPERATOR_ADD;
    // Addition after pressing '='
    if (isFirstOperandEntered() && isCalculatedAfterEqualButton) {
        addFirstOperandAndOperation();
        return;
    }

    // Addition after pressing '+'
    if (isFirstOperandEntered()) {
        makeCalculation();
        return;
    }

    // Addition after entered 1st operand
    addFirstOperandAndOperation();

};

subtractionButton.onclick = () => {
    globalOperator = OPERATOR_SUB;
    // Subtraction after pressing '='
    if (isFirstOperandEntered() && isCalculatedAfterEqualButton) {
        addFirstOperandAndOperation();
        return;
    }

    // Subtraction after pressing '+'
    if (isFirstOperandEntered()) {
        makeCalculation();
        return;
    }

    // Subtraction after entered 1st operand
    addFirstOperandAndOperation();

};

multiplicationButton.onclick = () => {
    globalOperator = OPERATOR_MULT;
    // Multiplication after pressing '='
    if (isFirstOperandEntered() && isCalculatedAfterEqualButton) {
        addFirstOperandAndOperation();
        return;
    }

    // Multiplication after pressing '+'
    if (isFirstOperandEntered()) {
        makeCalculation();
        return;
    }

    // Multiplication after entered 1st operand
    addFirstOperandAndOperation();

};

divisionButton.onclick = () => {
    globalOperator = OPERATOR_DIV;
    // Division after pressing '='
    if (isFirstOperandEntered() && isCalculatedAfterEqualButton) {
        addFirstOperandAndOperation();
        return;
    }

    // Division after pressing '+'
    if (isFirstOperandEntered()) {
        makeCalculation();
        return;
    }

    // Division after entered 1st operand
    addFirstOperandAndOperation();

};

equalButton.onclick = () => {
    if (op1 != null && globalOperator != null) {
        if (op2 == null && displayDown.innerHTML === "") {
            return;
        }
        if (op2 == null) {
            op2 = displayDown.innerHTML;
        }
        try {
            result = calculate(op1, globalOperator, op2);
        } catch(e) {
            alert('Ошибка ' + e.name + ":" + e.message);
        }
        displayUp.innerHTML = op1 + globalOperator + op2 + '=';
        displayDown.innerHTML = result;
        isCalculatedAfterEqualButton = true;
        op1 = result;
    }
};

