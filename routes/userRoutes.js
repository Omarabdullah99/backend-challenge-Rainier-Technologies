import express from 'express'
import { login, privateRoute, register } from '../controllers/userController.js'
import { verifyAdmin } from '../utils/middleware.js'

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.get('/private',verifyAdmin, privateRoute)

export default router