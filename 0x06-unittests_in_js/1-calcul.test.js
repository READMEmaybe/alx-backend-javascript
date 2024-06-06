const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should round a and b and return the sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should round a and b and return the sum', () => {
    assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
    assert.strictEqual(calculateNumber('SUM', -1.4, -3.7), -5);
  });
  it('should round a and b and return the difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('should round a and b and return the difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.7), 3);
  });
  it('should round a and b and return the quotient', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('should round a and b and return the quotient', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1, -3), 0.3333333333333333);
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, -3.7), 0.25);
  });
  it('should round a and b and return "Error"', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('should round a and b and return "Error"', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1, 0), 'Error');
  });
});
