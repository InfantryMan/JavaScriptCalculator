import calculate from '../scripts/calculate';

const assert = require('assert');

describe('Positive tests', () => {
    describe('Addition', () => {
        it('Integer + integer', () => {
           assert.strictEqual(calculate(10, '+', 5), 15, '10 + 5 = 15');
        });
        it('Integer + float', () => {
            assert.strictEqual(calculate(3, '+', 2.2), 5.2, '3 + 2.2 = 5.2');
        });
    });

    describe('Subtraction', () => {
       it('Integer - float', () => {
           assert.strictEqual(calculate(8, '-', 3.3), 4.7, '8 - 3.3 = 4.7');
       })
    });

    describe('Multiplication', () => {
        it('Integer * float', () => {
            assert.strictEqual(calculate(5, '*', 3), 15, '5 * 3 = 15');
        })
    });

    describe('Division', () => {
        it('Integer / float', () => {
            assert.strictEqual(calculate(5, '/', 3), 5 / 3, '5 / 3 = 5 / 3');
        })
    });

    describe('Numbers are presented as string', () => {
        it('2 numbers as string', () => {
            assert.strictEqual(calculate('228.322', '/', '1337'), 228.322 / 1337, '228.322 / 1337 = 228.322 / 1337');
        })
    });

});

describe('Negative tests', () => {
    it('Division by zero', () => {
        assert.strictEqual(calculate(17, '/', 0), Infinity, '17 / 0 = Infinity');
    });

    it('Text', () => {
        assert.throws( () => calculate('Hello', '+', 'World'),  SyntaxError, 'Bad input data');
    });

    it('Unsupported operator', () => {
        assert.throws( () => calculate('15', '&', '14'), SyntaxError, 'Unsupported operator');
    });

    it('Operands type neither string nor number', () => {
        let obj1 = {};
        let obj2 = {};
        obj1.name = "Rustam";
        obj2.surname = "Migranov";
        assert.throws( () => calculate(obj1, '-', obj2), TypeError, 'Neither string nor number');
    })

});

