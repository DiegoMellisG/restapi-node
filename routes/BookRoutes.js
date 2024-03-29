const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Book = require('../models/Books');


router.get('/', (request, response) => {

    console.log('[GET] Listando los libros de Books API');
    Book.find()
    .exec()
    .then(books => {
        console.log(books);
        response.status(200).json(books);
    })
    .catch( error => {
        console.log(error);
        response.status(500).json({error: error});
    });
})


router.get('/:bookTitle', (request, response) => {
    console.log('[GET] Obteniendo un libro de Books API')
    const bookTitle = request.params.bookTitle;
    Book.findOne({title: bookTitle})
        .exec()
        .then(book => {
            console.log(book);
            response.status(200).json(book)
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({error: error});
        });
});

router.post('/', (request, response) => {

    console.log("[POST] Creando un Book...");
    const book = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: request.body.title,
            author: request.body.author,
            editorial: request.body.editorial,
            price: request.body.price
        });
    book
        .save()
        .then(result => {
            console.log(result);
            response.status(201).json({
                message: "Manejando un POST desde Books API",
                created: book
            });
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({error: error})
        });
    
});

module.exports = router;