import { useNavigate } from 'react-router';
import { goToCreateBeneficiary, goToPlanos } from '../../router/Coordinator';
import { goToPrecos, goToBeneficiaries, goToProposals } from './../../router/Coordinator';

function Main() {

  const navigate = useNavigate()

  const onClickPlanos = () => {
    goToPlanos(navigate)
  }

  const onClickPrecos = () => {
    goToPrecos(navigate)
  }

  const onClickBeneficiaries = () => {
    goToBeneficiaries(navigate)
  }

  const onClickCreateBeneficiaries = () => {
    goToCreateBeneficiary(navigate)
  }

  const onClickProposal = () => {
    goToProposals(navigate)
  }

  return (
    <div>
      <h1> Bem vindo a página da Planium!</h1>
      <p> Por favor, escolha a página para a qual você deseja ir:</p>
      <button onClick={onClickCreateBeneficiaries}> Cadastrar Beneficiarios </button>
      <button onClick={onClickPlanos}> Mostrar Planos </button>
      <button onClick={onClickPrecos}> Mostrar Preços </button>
      <button onClick={onClickBeneficiaries}> Mostrar Beneficiarios </button>
      <button onClick={onClickProposal}> Mostrar Propostas </button>
    </div>
  )
}

export default Main;
