const request = require('supertest');
const app = require('../app')

describe('Test the app', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})


describe('Test the get book', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/book');
        expect(response.body.title).toBe('Happines');
        expect(response.body.author).toBe('Daniel Knafo');
        expect(response.body.year).toBe(2008);
        expect(response.body.pages).toBe(123);

        expect(response.statusCode).toBe(200);
    });
})


describe('/POST book', () => {
    it.only('it should return succes message', async () => {

        const response = await request(app).post('/book');
        expect(response.statusCode).toBe(200);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: "Book successfully added!", error: false });
                // res.should.have.status(200);
                // res.body.should.be.a('object');
                // res.body.should.have.property('errors');
                // res.body.errors.should.have.property('pages');
                // res.body.errors.pages.should.have.property('kind').eql('required');
                // done();

    });

});





















