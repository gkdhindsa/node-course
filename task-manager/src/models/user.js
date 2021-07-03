const mongoose=require('mongoose')
const validator= require('validator')
const User = mongoose.model('User',{
    name: {
        type: String,
        trim: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value){
           if(value.toLowerCase().includes('password'))
            {
                throw new Error('Password cannot contain "password"')

            }
        }
    },
    email:{
        type: String,
        required: true,
        trim: true,
       
        lowercase: true,
        validate(value)
        {
            
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age:{
        type: Number,
        requires: false,
        validate(value)
        {
            if(value<0)
            {
                throw new Error('Age must be positive')
            }
        }
    }
})

module.exports=User