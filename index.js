const express=require('express')
const configureDB = require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const app=express()
const port=3060

app.use(cors())

configureDB()
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log('serverrunning on port ',port)
})