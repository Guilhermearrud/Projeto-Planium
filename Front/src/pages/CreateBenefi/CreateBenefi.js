import axios from 'axios'
import { useForm } from "react-hook-form";
import { goBack } from '../../router/Coordinator';
import { useNavigate } from 'react-router';
import { url } from './../../constants/baseUrl';
import { BoxOrganization } from '../Style/Style';

export const Createbenefi = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: { qntdBeneficiarios: 1 }, shouldUnregister: true })

    const qntdBeneficiarios = watch('qntdBeneficiarios')

    console.log(errors)

    const navigate = useNavigate()

    const handleBack = (event) => {
        event.preventDefault();
        goBack(navigate)
    }

    const onSubmitForm = (data) => {

        console.log(data)

        let payload = {
            "qntdBeneficiarios": data.qntdBeneficiarios,
            "registroEscolhido": data.registroEscolhido,
            "beneficiarios":
                [
                    {"nome": data.beneficiarios.nome, "idade": data.beneficiarios.idade}
                ]
        }

        axios.post(`${url}createBeneficiarios`, payload)
            .then((res) => {
                console.log(res.data.message)
                alert('Criado com sucesso!')
            })
            .catch((er) => {
                console.log(er)
            })
    }

    return (
        <div>
            <button onClick={handleBack}> Voltar </button>

            <form onSubmit={handleSubmit(data => onSubmitForm(data))}>
                <BoxOrganization>
                    <p> Por favor selecione o código do plano desejado.</p>
                    <input placeholder={"Registro Escolhido"} type='number' {...register('registroEscolhido', { required: 'É necessário digitar o registro escolhido', valueAsNumber: true })} />
                    <span style={{ color: 'red' }}>{errors?.registroEscolhido?.message}</span>
                    <p> Quantos beneficiarios gostaria de cadastrar?</p>
                    <input placeholder={"Quantidade Beneficiarios"} type='number' min={1}  {...register('qntdBeneficiarios', { required: 'É necessário escolher quantos beneficiadores serão cadastrados.', valueAsNumber: true })} />
                    <span style={{ color: 'red' }}>{errors?.qntdBeneficiarios?.message}</span>
                    <p> Preencha seus beneficiarios </p>

                    {qntdBeneficiarios > 0 && Array.from(Array(Number(qntdBeneficiarios))).map((_, index) => {
                        return (
                            <div key={index}>
                                <p> Digite as informações do Beneficiario número: {index + 1}</p>
                                <input placeholder={"nome"} {...register(`beneficiario.${index}.nome`, { required: 'Digite o nome' })} />
                                <span style={{ color: 'red' }}>{errors?.beneficiarios?.[index]?.nome?.message}</span>
                                <input placeholder={"idade"} type='number' {...register(`beneficiario.${index}.idade`, { required: 'Digite a idade', valueAsNumber: true })} />
                                <span style={{ color: 'red' }}>{errors?.beneficiarios?.[index]?.idade?.message}</span>
                            </div>
                        )
                    })}

                    <button type={"submit"}> Cadastrar </button>
                </BoxOrganization>
            </form>
        </div>
    )
}