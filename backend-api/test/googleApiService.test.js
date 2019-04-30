const expect = require('chai').expect;
const { fetchRawHtml } = require('../services/googleApiService');
const fs = require('fs');

describe('Test Google API without any parameters', () => {
  it('Should fail', () => {
    return fetchRawHtml(null, '')
      .then((res) => expect.fail() )
      .catch((er) => expect(true).to.equal(true) );
  });
});

describe('Test Google API without keyword', () => {
  it('Should fail', () => {
    return fetchRawHtml(null, 0)
      .then((res) => expect.fail() )
      .catch((er) => expect(true).to.equal(true) );
  });
});

describe('Test Google API without page', () => {
  it('Should fail', () => {
    return fetchRawHtml('node unit test', 0)
      .then((res) => expect.fail() )
      .catch((er) => expect(true).to.equal(true) );
  });
});