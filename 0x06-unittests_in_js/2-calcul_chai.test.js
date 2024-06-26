const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('calculateNumber', () => {
  it('should round a and b and return the sum', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should round a and b and return the sum', () => {
    expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    expect(calculateNumber('SUM', -1.4, -3.7)).to.equal(-5);
  });
  it('should round a and b and return the difference', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('should round a and b and return the difference', () => {
    expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -1.4, -3.7)).to.equal(3);
  });
  it('should round a and b and return the quotient', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('should round a and b and return the quotient', () => {
    expect(calculateNumber('DIVIDE', -1, -3)).to.equal(0.3333333333333333);
    expect(calculateNumber('DIVIDE', -1.4, -3.7)).to.equal(0.25);
  });
  it('should round a and b and return "Error"', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('should round a and b and return "Error"', () => {
    expect(calculateNumber('DIVIDE', -1, 0)).to.equal('Error');
  });
});
