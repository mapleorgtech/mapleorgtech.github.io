import mongoose from 'mongoose'
const User = require('./User')
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    regular: Boolean, 
    user: User, 
    photoUri: String
}, { timestamps: true }); 

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer