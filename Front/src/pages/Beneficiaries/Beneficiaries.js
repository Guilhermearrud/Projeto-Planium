import axios from 'axios'
import { useEffect, useState } from 'react';
import { goBack } from '../../router/Coordinator';
import { url } from './../../constants/baseUrl';
import { useNavigate } from 'react-router';
import { StyledBox } from './../Style/Style';

export const Beneficiaries = () => {

    const navigate = useNavigate()
    const [beneficiaries, setBeneficiaries] = useState([])

    const handleBack = (event) => {
        event.preventDefault();
        goBack(navigate)
    }

    const showBeneficiadores = () => {
        axios.get(`${url}beneficiarios`)
            .then((res) => {
                console.log(res.data)
                setBeneficiaries(res.data)
            })
            .catch((er) => {
                console.error(er)
            })
    }

    let listBeneficiaries = beneficiaries.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <p>ID: {item.id}</p>
              <p>Registro Escolhido: {item.registroEscolhido}</p>
              <p>Número de Beneficiadores: {item.qntdBeneficiarios}</p>
              <p>Beneficiarios:</p>

              {item.beneficiarios.map((benefi) => {
                return (
                    <p>Nome: {benefi.nome}, Idade: {benefi.idade}</p>
                )
              })}

            </div>
          </div>
        )
      })

    useEffect(() => {
        showBeneficiadores()
    }, [])

    return (
        <div>
            <button onClick={handleBack}>Voltar</button>
            <h1> Lista de Beneficiarios </h1>
            <StyledBox>
                {listBeneficiaries}
            </StyledBox>
        </div>
    )
}