import mongoose from 'mongoose'
// const Location = require('./location') 
const User = require('./User')
const Product = require('./Product')
const Schema = mongoose.Schema;

const storageSchema = new Schema({
    storageID: String, 
    // location: Location,
    regionalManager: User, 
    areaManager: User, 
    territoryManager: User, 
    fieldAssist: User, 
    inventory: [new Schema({
        id: String, 
        products: Product
    })]  
}, { timestamps: true }); 

const Storage = mongoose.model('Storage', storageSchema)
module.exports = Storage