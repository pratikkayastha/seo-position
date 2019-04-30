const expect = require('chai').expect;
const { locateDomain } = require('../services/responseParserService');
const fs = require('fs');

describe('Test locateDomain without any parameters', () => {
  it('Should fail', () => {
    expect(locateDomain(null, '')).to.equal(null);
  });
});

describe('Test locateDomain without rawHTML parameter', () => {
  it('Should fail', () => {
    expect(locateDomain(null, 'mochajs.org')).to.equal(null);
  });
});

describe('Test locateDomain without domain parameter', () => {
  it('Should fail', () => {
    const response = fs.readFileSync('test/resources/searchResponse.html', 'utf8');

    expect(locateDomain(response, '')).to.equal(null);
  });
});

describe('Test locating domain mochajs.org', () => {
  it('Should find mochajs.org at 1', () => {
    const response = fs.readFileSync('test/resources/searchResponse.html', 'utf8');

    expect(locateDomain(response, 'mochajs.org')[0]).to.equal(1);
  });
});