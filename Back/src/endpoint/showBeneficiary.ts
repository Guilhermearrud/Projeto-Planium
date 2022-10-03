import { Request, Response } from "express";
import benefi from '../beneficiarios.json'

export default async function showBeneficiary(req: Request, res: Response){

    try {

        const allBenefi = benefi

        res.status(200).send(allBenefi)
        
    } catch (error: any) {
        res.status(500).send({ message: error.message})
    }
}