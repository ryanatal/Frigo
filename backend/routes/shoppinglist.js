import express from 'express';
import { addItems, getItems } from '../controllers/shoppinglist.js';

const router = express.Router();

router.post('/add', addItems);
router.get('/get', getItems);

export default router;