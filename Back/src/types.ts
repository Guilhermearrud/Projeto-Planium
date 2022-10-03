export type beneficiarioT = {
        nome: string,
        idade: number,
        preco: number
}

export type inputBeneficiario = {
        id: string,
        qntdBeneficiarios: number,
        registroEscolhido: number,
        beneficiarios: beneficiarioT[],
        somaTotal: number
}

export type inputPlan = {
        codigo: number,
        minimo_vidas: number,
        faixa1: number,
        faixa2: number,
        faixa3: number,
}