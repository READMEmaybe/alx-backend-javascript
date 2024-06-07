const getPaymentTokenFromAPI = require('./6-payment_token.js');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('promise returned', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      })
      .catch((error) => done(error));
  });
});