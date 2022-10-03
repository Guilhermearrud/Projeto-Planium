import axios from 'axios'
import { useEffect, useState } from 'react';
import { goBack } from '../../router/Coordinator';
import { url } from './../../constants/baseUrl';
import { useNavigate } from 'react-router';
import { StyledBox } from './../Style/Style';

export const Proposal = () => {

    const navigate = useNavigate()
    const [proposal, setProposal] = useState([])

    const handleBack = (event) => {
        event.preventDefault();
        goBack(navigate)
    }

    const showProposals = () => {
        axios.get(`${url}propostas`)
            .then((res) => {
                console.log(res.data)
                setProposal(res.data)
            })
            .catch((er) => {
                console.error(er)
            })
    }

    let listProposal = proposal.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <p>ID: {item.id}</p>
              <p>Registro Escolhido: {item.registroEscolhido}</p>
              <p>Número de Beneficiadores: {item.qntdBeneficiarios}</p>
              <p>Beneficiarios:</p>

              {item.beneficiarios.map((proposal) => {
                return (
                    <p>Nome: {proposal.nome}, Idade: {proposal.idade}, Preço: {proposal.preco}</p>
                )
              })}

              <p> Preço total da proposta: {item.somaTotal}</p>
            </div>
          </div>
        )
      })

    useEffect(() => {
        showProposals()
    }, [])

    return (
        <div>
            <button onClick={handleBack}>Voltar</button>
            <h1> Lista de Propostas </h1>
            <StyledBox>
                {listProposal}
            </StyledBox>
        </div>
    )
}