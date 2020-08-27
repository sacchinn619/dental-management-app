const Appointment=require('../models/appointment')
const appointmentsController = {}

appointmentsController.post=(req,res)=>{
    const body = req.body 
    const appointment = new Appointment(body)
    appointment.userId = req.userId    //assiging appointments to particular user who logs in//
    appointment.save()
        .then((appointment) => {
            res.json(appointment)
        })
        .catch((err) => {
            res.json(err)
        })
}
appointmentsController.get=(req,res)=>{
    const body=req.body
   Appointment.find({})
    .then((appointment)=>{
        res.json(appointment)
   })
   .catch((err)=>{
       res.json(err)
    })
 }
 appointmentsController.update=(req,res)=>{
    const id = req.params.id 
    const body = req.body 
    Appointment.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        .then((appointment) => {
            res.json(appointment)
        })
        .catch((err) => {
            res.json(err)
        })
 }
 module.exports= appointmentsController