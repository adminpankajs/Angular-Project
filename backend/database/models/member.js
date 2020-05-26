const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    joining: {
        type: String,
        require: true
    },
    wing: {
        type: String,
        require: true
    }
    
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;