import mongoose from 'mongoose'
const Schema = mongoose.Schema; 


const userSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    token: {
        type: String, 
        required: true
    }, 
    email: {
        type: String
    }, 
    phone: {
        type: String
    }, 
    role: {
        type: String, 
        required: true
    }

}, { timestamps: true }); 

const User = mongoose.model('User', userSchema)
module.exports = User 