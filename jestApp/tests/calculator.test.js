const mathOperations = require('../index.js');

describe('Calculator Tests', () => {
    test('Sum of 1 and 2 should be 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('Difference of 5 and 3 should be 2', () => {
        expect(mathOperations.diff(5, 3)).toBe(2);
    });

    test('Product of 4 and 5 should be 20', () => {
        expect(mathOperations.product(4, 5)).toBe(20);
    });

    test('Division of 10 by 2 should be 5', () => {
        expect(mathOperations.divide(10, 2)).toBe(5);
    });

    test('Division by zero should throw an error', () => {
        expect(() => mathOperations.divide(10, 0)).toThrow("Cannot divide by zero");
    });
}   
);
// // Test cases