const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const calculateNumberspy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberspy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    calculateNumberspy.calculateNumber.restore();
  });
});
