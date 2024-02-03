import { Request, Response } from 'express'
import { getTest } from '../../services/user-service/RepairService'
import { Test } from '../../interfaces/test'

export const testFunction = (req: Request, res: Response) => {
    const data: Test[] = getTest()

    res.status(200).json({
        message: 'ok',
        data: data
    })
}