const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: String,
        author: String,
        editorial: String,
        price: Number
    }
);

module.exports = mongoose.model('Book',bookSchema);