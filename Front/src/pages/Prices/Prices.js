import axios from 'axios'
import { useEffect, useState } from 'react';
import { url } from './../../constants/baseUrl';
import { useNavigate } from 'react-router';
import { goBack } from '../../router/Coordinator';
import { StyledBox } from './../Style/Style';

export const Prices = () => {

  const [prices, setPrices] = useState([])
  const navigate = useNavigate()

  const handleBack = (event) => {
    event.preventDefault();
    goBack(navigate)
  }

  const showPrices = () => {
    axios.get(`${url}precos`)
      .then((res) => {
        console.log(res.data)
        setPrices(res.data)
      })
      .catch((er) => {
        console.error(er)
      })
  }

  let listPrices = prices.map((item) => {
    return (
      <div>
        <div>
          <p>Código: {item.codigo}</p>
          <p>Número mínimo de Beneficiadores: {item.minimo_vidas}</p>
          <p>Valor da faixa1: {item.faixa1}</p>
          <p>Valor da faixa2: {item.faixa2}</p>
          <p>Valor da faixa3: {item.faixa3}</p>
        </div>
      </div>
    )
  })

  useEffect(() => {
    showPrices()
  }, [])

  return (
    <div>
      <button onClick={handleBack}>Voltar</button>
      <h1> Lista de Preços </h1>
      <StyledBox>
        {listPrices}
      </StyledBox>
    </div>
  )
}