import mongoose from "mongoose";
import brcyptjs from 'bcryptjs'



const UserSchema = new mongoose.Schema({
    email: {
        require: [true, 'Please provide a email'],
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Please provide a password'],
        minlength: 6,
        unique: true
    },
    lastName:{
        type: String,
        require: true,
    },

    firstName: {
        type: String,
        require: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true
    }

})

export default mongoose.model('User',UserSchema);