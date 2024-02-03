import express from 'express'
import userServiceRoute from './user-service'

const router = express.Router()

router.use('/services', userServiceRoute)

export default router