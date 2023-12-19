import express from 'express'
const app= express()
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import UserRouter from './routes/userRoutes.js'
import CourseRouter from './routes/courseRoutes.js'


//*MongoDb-Connect
const MONGODB_URL="mongodb+srv://omarabdullah3033:mmBEKAEYK7jXROPq@job-task.wapj2rn.mongodb.net/?retryWrites=true&w=majority"

main().catch(err => console.log(err))
async function main(){
    await mongoose.connect(MONGODB_URL);
    console.log('database connected')
  }

//*middleware
app.use(cookieParser())
app.use(cors())
app.use(express.json())


//*router middleware
app.use('/api/users', UserRouter)
app.use('/api/course', CourseRouter)

app.get("/",(req,res)=>{
    res.json({status:"success"})
})
app.listen(8800,()=>{
    console.log("Connected to backend!")
})
