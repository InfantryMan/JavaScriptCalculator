/*
 *  Function: calculate
 *  -------------------
 *  Returns the result of mathematical expression.
 *  This function supports 4 mathematical operators: '+', '-', '*', '/'.
 *
 *  op1: first operand. Type: STRING or NUMBER.
 *  operator: mathematical operator. Type: STRING.
 *  op2: second operand. Type: STRING or NUMBER.
 *
 *  returns: result of mathematical expression. Type: NUMBER.
 */
function calculate(op1, operator, op2) {
    if (typeof(op1) !== "string" && typeof(op2) !== "string" && typeof(op1) !== "number" && typeof(op2) !== "number") {
        throw TypeError("Expected string or number");
    }
    if (typeof(op1) === "string") {
        op1 = parseFloat(op1);
    }
    if (typeof(op2) === "string") {
        op2 = parseFloat(op2);
    }
    if (isNaN(op1) || isNaN(op2)) {
        throw SyntaxError("Incorrect data");
    }

    switch(operator) {
        case '+':
            return op1 + op2;
        case '-':
            return op1 - op2;
        case '*':
            return op1 * op2;
        case '/':
            return op1 / op2;
        default:
            throw SyntaxError("Unsupported operator");
    }
}

export default calculate;

