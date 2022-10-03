import { Request, Response } from "express";
import proposal from '../proposta.json'

export default async function showProposals(req: Request, res: Response){

    try {

        const allProposals = proposal

        res.status(200).send(allProposals)
        
    } catch (error: any) {
        res.status(500).send({ message: error.message})
    }
}