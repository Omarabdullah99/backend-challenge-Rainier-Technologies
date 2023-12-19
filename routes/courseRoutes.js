import express from 'express'
import { verifyAdmin } from '../utils/middleware.js'
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from '../controllers/courseController.js'

const router=express.Router()


router.get("/getAllCourse",getAllCourses)
router.get("/getCourse/:id",getCourseById)
router.patch("/updateCourse/:id",verifyAdmin, updateCourse)
router.delete("/delete/:id",verifyAdmin, deleteCourse)

router.post("/createCourse",verifyAdmin, createCourse)

export default router