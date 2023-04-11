import express from 'express';
import { addIngredients, getIngredients } from '../controllers/pantry.js';

const router = express.Router();

router.post('/add', addIngredients);
router.get('/get', getIngredients);

export default router;