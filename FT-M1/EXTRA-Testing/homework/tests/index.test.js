const { 
    checkSeatStatus,
    getRowNumber,
    getSeatStatus,
    book
} = require('../homework');

describe('Evaluating the checkSeatStatus function', () => {
    it('checkSeatStatus is a function', () => {
        expect(typeof checkSeatStatus === 'function').toBe(true);
    })
});

describe('Validating data', () => {
    it('if the parameter is not a string, indicate that it must be', () => {
        expect(() => checkSeatStatus(225)).toThrow('First parameter is not a string');
    });
    it('if the parameter is not a number, indicate that it must be', () => {
        expect(() => checkSeatStatus('225', 'a')).toThrow('Second parameter is not a number');
    })
    it('Entering the letter A has to give us 0', () => {
        expect(getRowNumber('A')).toBe(0);
    })
    it('Entering the letter C has to give us 2', () => {
        expect(getRowNumber('C')).toBe(2);
    })
    it('giving A and 2 should return true', () => {
        expect(getSeatStatus('A', 2)).toBeTruthy;
    })
    it('giving D and 3 should return false', () => {
        expect(getSeatStatus('D', 3)).toBeFalse;
    })
});

describe('testing book', () => {
    it('if the column is B and the number is 2 it should return successfully', () => {
        expect(book('B', 2)).toBe('Seat in B2 is successfully booked');
    })
    it('if the column is C and the number is 1 it should return already', () => {
        expect(book('C', 1)).toBe('Seat in C1 is already booked');
    })
});


