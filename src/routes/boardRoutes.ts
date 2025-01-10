import express from 'express';
import { createBoard } from '../controllers/boardController';

const router = express.Router();

router.post('/board', createBoard);

export default router;