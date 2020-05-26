const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomtype: {
        type: String,
        trim: true,
    },
    stock: {
        type: String,
        trim: true
    },
    range: {
        type: String,
        trim: false
    },
    
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;