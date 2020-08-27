const mongoose =require('mongoose')

const Schema = mongoose.Schema
const appointmentSchema = new Schema({
    date: {
        type: Date
    },
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    description: {
        type: String,
        
    },
    slot: {
        type: String,
        
    },
    status: {
        type: String,
        
    }
    
})

// create a model
const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
