import { Request, Response } from "express";
import prices from '../data/prices.json'

export default async function showPrices(req: Request, res: Response){

    try {

        const allPrices = prices

        res.status(200).send(allPrices)
        
    } catch (error: any) {
        res.status(500).send({ message: error.message})
    }
}