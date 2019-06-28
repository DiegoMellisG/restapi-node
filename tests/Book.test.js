const assert = require('assert');
const mongoose = require('mongoose');
const Book = require('../models/Books');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const index = require('../index');
const should = chai.should(); 

chai.use(chaiHttp);

describe('Libros de Books API', () => {
    before((done) => { 
        Book.deleteMany({}, () => {
            done();           
        });        
    });

    describe('[POST] Books API', () => {
        it('Debería crearse un nuevo libro', (done) => {
            const book = {
                title: 'El principito',
                author: 'Antoine de Saint-Exupéry',
                editorial: 'Emecé Editores',
                price: 5000
            };
            chai.request(index)
                .post('/books')
                .set('Accept', 'application/json')
                .send(book)
                .end((err, res) => {
                    expect(res.status).to.equal(201);
                    expect(res.body.created).to.include({
                        title: book.title,
                        author: book.author,
                        editorial: book.editorial,
                        price: book.price
                    });
                    done();
                });
            });
    });
    /*
    * TEST [GET] LOS LIBROS
    */
    describe('[GET] Books API', () => {
        it('Debería mostrarse una lista vacía por el borrado anterior', (done) => {
            chai.request(index)
                .get('/books')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });

        it('Debería obtener un libro', (done) =>
        {   
            const bookTitle = "El principito";
        
            chai.request(index)
                .get(`/books/${bookTitle}`)
                .set('Accept', 'application/json')
                .end((err,res) => {
                    console.log(res.body);
                    expect(res.body.title).equal(bookTitle);
                    done();
                });
        });
    });

    
});