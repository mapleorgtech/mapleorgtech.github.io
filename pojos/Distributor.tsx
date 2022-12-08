import mongoose from 'mongoose'
const User = require('./User')
const Customer = require('./Customer')
const Storage = require('./Storage')
const Schema = mongoose.Schema;

const distributorSchema = new Schema({
    user: User, 
    regular: Boolean, 
    customers: [Customer], 
    storageAssigned: [Storage] 
}, { timestamps: true }); 

const Distributor = mongoose.model('Distributor', distributorSchema)
module.exports = Distributor
