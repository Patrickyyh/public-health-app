
import express from 'express'
// import database Model
import User from '../models/User.js'
import dotenv from 'dotenv'
dotenv.config()
import validator from 'validator';
import ValidationError from '../errors/validation-error.js'

// controller for sign in
const router = express.Router();
router.post('/api/v1/auth/login', async (req,res)=>{
    const {email, password} = req.body

    // check if user provides a/an email or password
    if (!email || !password) {
        throw new ValidationError('Please provide a/an email or password');
    }

    // check if the format of user's email is correct
    if (!validator.isEmail(email)) {
        throw new ValidationError('Please provide a CORRECT email');
    }

    // check if user has registered
    const userInfo = await User.findOne({email})
    if (!userInfo) {
        throw new ValidationError('User does not exist');
    }

    // check if the email and password is a match
    const truePassword = await User.findOne({email, password})
    if (!truePassword) {
        throw new ValidationError('Password is incorrect');
    }


    // if email and password is a match, then user can sign in
    res.status(201).json({
        success: true,
        data: userInfo
    })



    const user = await User.create({ email, password});
    await user.save()

    //res.status(201).send( {user});
    console.log("here");
})


export {router as LoginRouter}

// setup the router
