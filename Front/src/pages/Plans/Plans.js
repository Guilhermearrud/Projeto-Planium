import axios from 'axios'
import { useEffect, useState } from 'react';
import { goBack } from '../../router/Coordinator';
import { url } from './../../constants/baseUrl';
import { useNavigate } from 'react-router';
import { StyledBox } from './../Style/Style';

export const Plans = () => {

    const [planos, setPlanos] = useState([])
    const navigate = useNavigate()

    const handleBack = (event) => {
        event.preventDefault();
        goBack(navigate)
    }

    const showPlans = () => {
        axios.get(`${url}planos`)
            .then((res) => {
                console.log(res.data)
                setPlanos(res.data)
            })
            .catch((er) => {
                console.error(er)
            })
    }

    useEffect(() => {
        showPlans()
    }, [])

    let listPlanos = planos.map((item) => {
        return (
            <div key={item.codigo}>
                <div>
                    <p>Registro: {item.registro}</p>
                    <p>Nome: {item.nome}</p>
                    <p>Código: {item.codigo}</p>
                </div>
            </div>
        )

    })

    return (
        <div>
            <button onClick={handleBack}>Voltar</button>
            <h1> Lista de Planos </h1>
            <StyledBox>
                {listPlanos}
            </StyledBox>
        </div>
    )
}