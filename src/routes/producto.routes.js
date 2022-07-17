import { Router } from 'express'
const router = Router();
import * as productoCtrl from '../controllers/producto.controller'

router.get('/', productoCtrl.listProducto);
router.post('/pro', productoCtrl.createProducto);
router.put('/updPro/:id', productoCtrl.updateProducto);
router.delete('/delePro/:id', productoCtrl.deleteProducto);

export default router;