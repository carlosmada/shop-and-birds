import { Router } from "express";
import { check } from "express-validator";
import { shop } from '../controllers/shop';
import { birds } from '../controllers/birds';
import { validateFields } from '../middlewares/validate';


const router = Router();

router.post('/shop', [
    check('budget', 'budget is required').not().isEmpty(),
    check('keyboards', 'keyboards is required').not().isEmpty(),
    check('drives', 'drives is required').not().isEmpty(),
    validateFields
],shop );

router.post('/birds', [
    check('population', 'population is required').not().isEmpty(),
    validateFields
], birds );

export default router;