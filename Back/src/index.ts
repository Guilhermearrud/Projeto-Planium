import { app } from './controller/app';
import showPlans from './endpoint/showPlans'
import showPrices from './endpoint/showPrices'
import manageBene from './endpoint/manageBene';
import showBeneficiary from './endpoint/showBeneficiary';
import showProposals from './endpoint/showProposals';

app.get('/planos', showPlans)
app.get('/precos', showPrices)
app.get('/beneficiarios', showBeneficiary)
app.get('/propostas', showProposals)
app.post('/createBeneficiarios', manageBene)

