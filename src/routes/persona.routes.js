import { Router } from 'express'
const router = Router();
import * as personaCtrl from '../controllers/persona.controller'

router.get('/', personaCtrl.listPaciente);
router.post('/per', personaCtrl.createPersona);
router.put('/updPer/:id', personaCtrl.updatePersona);
router.delete('/delePer/:id', personaCtrl.deletePersona);

export default router;