import { Request, Response } from "express";
import { inputBeneficiario, inputPlan } from "../types";
import prices from '../data/prices.json'
import fs from 'fs';

export default async function manageBene(req: Request, res: Response) {

    const path = "src/beneficiarios.json"
    const path2 = "src/proposta.json"

    try {

        // CRIAÇÃO DO BENEFICIARIO

        const { qntdBeneficiarios, registroEscolhido, beneficiarios }: inputBeneficiario = req.body


        if (!qntdBeneficiarios) {
            throw new Error("Por favor digite o número de beneficiarios do plano")
        }

        if (!registroEscolhido){
            throw new Error("Por favor digite o número do plano escolhido")
        }

        if (!beneficiarios){
            throw new Error("Digite as informações dos beneficiarios.")
        }

        for (let i = 0; i < beneficiarios.length; i++) {
            if (!beneficiarios[i].nome || !beneficiarios[i].idade) {
                throw new Error("Nome e/ou idade do beneficiario não informado!")
            }
        }

        if (qntdBeneficiarios != beneficiarios.length) {
            throw new Error("Número de beneficiarios não bate com a quantidade informada")
        }


        const beneficiaryInsert: inputBeneficiario = {
            id: Date.now().toString(),
            qntdBeneficiarios,
            registroEscolhido,
            beneficiarios,
            somaTotal: 0
        }

        // INSERE O PREÇO BASEADO NA IDADE E NO PLANO ESCOLHIDO ASSIM COMO A QUANTIDADE DE BENEFICIARIOS

        let minimoAtual = 0
        let plano

        for (let j = 0; j < prices.length; j++) {
            if (registroEscolhido === prices[j].codigo) {
                if (qntdBeneficiarios >= prices[j].minimo_vidas) {
                    if (minimoAtual < prices[j].minimo_vidas) {
                        minimoAtual = prices[j].minimo_vidas
                        plano = prices[j]
                    }
                }
            }
        }

        if (plano != null) {
            for (let i = 0; i < beneficiarios.length; i++) {
                if (beneficiarios[i].idade >= 0 && beneficiarios[i].idade < 18) {
                    beneficiarios[i].preco = plano.faixa1
                } else if (beneficiarios[i].idade >= 18 && beneficiarios[i].idade < 41) {
                    beneficiarios[i].preco = plano.faixa2
                } else if (beneficiarios[i].idade >= 41) {
                    beneficiarios[i].preco = plano.faixa3
                }

                beneficiaryInsert.somaTotal += beneficiarios[i].preco
            }
        } else {
            throw new Error("O plano informado não foi encontrado, por favor, cheque novamente o valor.")
        }

        let ListBeneficiary: any[] = []

        fs.readFile(path, 'utf8', (err, data) => {
            ListBeneficiary = JSON.parse(data)
            ListBeneficiary.push(req.body)
            const dataJson = JSON.stringify(ListBeneficiary, null, 2)

            fs.writeFile(path, dataJson, (err) => {
                console.log(err)
            })
        })

        let ListBeneficiaryPlan: any[] = []

        fs.readFile(path2, 'utf8', (err, data) => {
            ListBeneficiaryPlan = JSON.parse(data)
            ListBeneficiaryPlan.push(beneficiaryInsert)
            const dataJson = JSON.stringify(ListBeneficiaryPlan, null, 2)

            fs.writeFile(path2, dataJson, (err) => {
                console.log(err)
            })
        })

        res.status(201).send({ message: beneficiaryInsert })


    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}