import express from 'express'
import { verifyAdmin } from '../utils/middleware.js'
import { createCourse } from '../controllers/courseController.js'

const router=express.Router()

router.post("/createCourse",verifyAdmin, createCourse)

export default router