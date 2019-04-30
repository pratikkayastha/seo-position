const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const supertest = require('supertest');
const nock = require('nock');
const fs = require('fs');

describe('GET /', function () {
    it('Should return a 200', function () {
      return supertest(app)
      	.get('/')
        .expect(200)
    });
});

describe('GET /api/seoposition without any params', function() {
	it('Should return a 400', function() {
		return supertest(app)
			.get('/api/seoposition')
			.expect(400);
	});
});

describe('GET /api/seoposition with empty params', function() {
	it('Should return a 400', function() {
		return supertest(app)
			.get('/api/seoposition?keyword=&domain=')
			.expect(400);
	});
});

describe('GET /api/seoposition without domain param', function() {
	it('Should return a 400', function() {
		return supertest(app)
			.get('/api/seoposition?keyword=cat')
			.expect(400);
	});
});

describe('GET /api/seoposition without keyword param', function() {
	it('Should return a 400', function() {
		return supertest(app)
			.get('/api/seoposition?domain=cat.com')
			.expect(400);
	});
});

describe('GET /api/seoposition with all keywords', function() {
	beforeEach(function() {
		const googleResponse = fs.readFileSync('test/resources/searchResponse.html', 'utf8');
		nock('https://www.google.com.au/')
		  .persist()
	      .get(() => true)
	      .reply(200, googleResponse);
	})
	it('Should return a 200', function() {
		return supertest(app)
			.get('/api/seoposition?keyword=cat&domain=cat.com')
			.expect(200);
	});
});