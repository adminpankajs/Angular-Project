const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    roomtype: {
        type: String,
        require: true
    },
    checkin: {
        type: String,
        trim: false,
    },
    checkout: {
        type: String,
        require: true
    },
    feedback: {
        type: String,
        require: true
    }
    
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;