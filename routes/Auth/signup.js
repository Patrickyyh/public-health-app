import express from 'express'
// import database Model
import User from '../../models/User.js'
import dotenv from 'dotenv'
dotenv.config()
import validator from 'validator'
import ValidationError from '../../errors/validation-error.js'
import { StatusCodes } from 'http-status-codes'
import bcryptjs from 'bcryptjs'

// controller for sign up
const router = express.Router();

router.post('/api/v1/auth/signup', async (req,res)=>{

    const {email, password, lastName, firstName, phoneNumber, dob} = req.body

    /*
      check database for availability
      if already exists, throw error and message "account already exists"
      else create new user and add info to database
    */

    if (!email || !password ||  !lastName || !firstName || !phoneNumber || !dob) {
        throw new ValidationError('Please provide all values');
    }

    // check the format of the email
    if (!validator.isEmail(email)) {
        throw new ValidationError("not an email ")
    }

    // Check if the user already exist
    const userExisted = await User.findOne({email});
    if (userExisted) {
        throw new ValidationError('Email already in used');
    }

    // hash the password

    const hashedPassword = await bcryptjs.hash(password, 10);

    //adding to database
    const user = await User.create({ email, password: hashedPassword, lastName, firstName, phoneNumber, dob} );
    await user.save()

    // create json webtoken
    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json(
        {
            user:{
            email: user.email,
            lastName : user.lastName,
            firstName: user.firstName,
            phoneNumber: user.phoneNumber,
            dob : user.dob
        } , token});

})


export {router as SignupRouter}

// setup the router
