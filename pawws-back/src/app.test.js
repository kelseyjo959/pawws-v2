import request from 'supertest';
import { expect } from 'chai';
import app from './app';

describe('GET /', () => {
	it('gives a dummy message so we know it works', (done) => {
		request(app)
			.get('/')
			.expect(res => expect(res.body).to.have.property('message'))
			.expect(200, done);
	});
});

describe('GET /random-url', () => {
	it('should return 404', (done) => {
		request(app)
			.get('/reset')
			.expect(404, done);
	});
});
