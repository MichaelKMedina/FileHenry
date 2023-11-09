const resta = require('./resta');

describe("Interger numbers", () => {
  it('Should return 5 if the numbers are 10 and 5', () => {
    expect(resta(10, 5)).toBe(5);
  });
  
  it('Should return 20 if the numbers are 40 and 20', () => {
    expect(resta(40, 20)).toBe(20);
  });
});
