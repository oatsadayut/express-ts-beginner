import express from 'express'
import { testFunction } from '../../controllers/user-service/test'

const router = express.Router()

router.get('/test', testFunction)

export default router