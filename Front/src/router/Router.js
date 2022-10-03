import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './../pages/Main/Main';
import { Plans } from './../pages/Plans/Plans';
import { Prices } from './../pages/Prices/Prices';
import { Beneficiaries } from './../pages/Beneficiaries/Beneficiaries';
import { Createbenefi } from './../pages/CreateBenefi/CreateBenefi';
import { Proposal } from './../pages/Proposal/Proposal';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main/>}/>
                <Route path='/planos' element={<Plans/>}/>
                <Route path='/precos' element={<Prices/>}/>
                <Route path='/beneficiarios' element={<Beneficiaries/>}/>
                <Route path='/propostas' element={<Proposal/>}/>
                <Route path='/criarBeneficiario' element={<Createbenefi/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router  