const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        trim: false,
    },
    email: {
        type: String,
        require: true
    },
    customercare: {
        type: String,
        require: true
    }
    
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;