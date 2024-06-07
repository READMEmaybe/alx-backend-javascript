const request = require('request');
const { expect } = require('chai');

describe('API test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/12 returns correct response', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/1 returns correct response', (done) => {
    request.get(`${API_URL}/cart/1`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
    });
  });

  it('GET /cart/hello returns correct response', (done) => {
    request.get(`${API_URL}/cart/hello`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/1/hello returns correct response', (done) => {
    request.get(`${API_URL}/cart/1/hello`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.eql({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });

  it('POST /login returns correct response', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Betty'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      done();
    });
  });
});
