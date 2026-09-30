const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userdb");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    FirstName: {
        Type: String,
        required: true,
        Trim: true,
        maxlength:30

    },
    LastName: {
        Type: String,
        required: true,
        Trim: true,
        maxlength:30
    }
});

const User = mongoose.model('User', userSchema);
module.exports ={
    User
};

