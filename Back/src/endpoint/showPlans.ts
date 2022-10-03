import { Request, Response } from "express";
import plans from '../data/plans.json'

export default async function showPlans(req: Request, res: Response){

    try {

        const allPlans = plans

        res.status(200).send(allPlans)
        
    } catch (error: any) {
        res.status(500).send({ message: error.message})
    }
}