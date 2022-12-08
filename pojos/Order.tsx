import mongoose from 'mongoose'
const Customer = require('./Customer') 
const Distributor = require('./Distributor') 
const Storage = require('./Storage') 
const Product = require('./Product') 
// const Location = require('./location') 

const Schema = mongoose.Schema; 

const orderSchema = new Schema({
    invoiceNumber: String, 
    invoiceLocation: String, 
    customer: Customer, 
    invoiceDate: String, 
    deliveryDate: String, 
    // deliveryLocation: Location, 
    paymentType: String, 
    distributor: Distributor, 
    storage: Storage, 
    batch: {
        id: String, 
        products: [Product]
    }

}); 

const Order = mongoose.model('Order', orderSchema)
module.exports = Order