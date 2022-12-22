import mongoose from 'mongoose'
const Schema = mongoose.Schema; 

const productSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    packetSize: {
        type: String, 
        required: true
    }, 
    unit: {
        type: String, 
        required: true
    }, 
    mfgDate: {
        type: String, 
        required: true
    }, 
    productGroup: {
        type: String, 
        required: true
    }, 
    Segment: {
        type: String, 
        required: true
    }
    // add raw materials list
}); 

const Product = mongoose.model('Product', productSchema)
module.exports = Product