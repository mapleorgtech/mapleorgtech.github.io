const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
    latitude: {
        type: String, 
        default: ""
    }, 
    longitude: {
        type: String, 
        default: ""
    },
    state: {
        type: String, 
        default: ""
    },
    terittory: {
        type: String, 
        default: ""
    },
    district: {
        type: String, 
        default: ""
    }, 
    block: {
        type: String, 
        default: ""
    }, 
},); 

module.exports = mongoose.model('Location', LocationSchema)
    