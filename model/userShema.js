const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    mobile:
    {
        type: String,
        required: true
    },
    profilePicture:
        { type: String },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Profile', profileSchema);

