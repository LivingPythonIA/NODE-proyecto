
import { Router } from 'express';
import * as ctrl from '../controllers/products.controller.js';
import protect from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/create', protect, ctrl.create);   // protegida
router.delete('/:id', protect, ctrl.remove);    // protegida

export default router;

