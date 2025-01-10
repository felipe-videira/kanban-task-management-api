import express from 'express';
import { createBoard, deleteBoard, getBoardById, getBoards, updatedBoard } from '../controllers/boardController';

const router = express.Router()

router.post('/board', createBoard);
router.get('/board', getBoards);
router.get('/board/:id', getBoardById);
router.put('/board/:id', updatedBoard);
router.delete('/board/:id', deleteBoard);

export default router;