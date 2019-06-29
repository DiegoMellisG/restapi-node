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
                .end((error, response) => {
                    expect(response.status).to.equal(201);
                    expect(response.body.created).to.include({
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
        it('Debería mostrarse una lista con los libros', (done) => {
            chai.request(index)
                .get('/books')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eql(1);
                    done();
                });
        });

        it('Debería obtener un libro', (done) =>
        {   
            const bookTitle = "El principito";
        
            chai.request(index)
                .get(`/books/${bookTitle}`)
                .set('Accept', 'application/json')
                .end((err,response) => {
                    expect(response.body.title).equal(bookTitle);
                    done();
                });
        });
    });

    
});