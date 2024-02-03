import express from 'express'
import RepairRouter from './RepairRouter'
import ReportRouter from './ReportRouter'
import MeetingRouter from './MeetingRouter'

const router = express.Router()

router.use('/repair', RepairRouter)
router.use('/report', ReportRouter)
router.use('/meeting', MeetingRouter)


export default router