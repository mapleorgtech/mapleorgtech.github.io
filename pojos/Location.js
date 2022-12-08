import mongoose from 'mongoose'

const LocationSchema = new mongoose.Schema({
    latitude: String, 
    longitude: String, 
    state: String, 
    territory: String, 
    district: String, 
    block: String 
}); 

export default mongoose.model('Location', LocationSchema)
