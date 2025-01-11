import express from 'express';
import { createBoard, deleteBoard, getBoardById, getBoards, swPostBoard, updatedBoard } from '../controllers/boardController';
import { createValidator } from 'express-joi-validation';
import boardSchema from '../schemas/board';

const router = express.Router()
const validator = createValidator({})

export const swBoardRouter = {
  "/board": {
    "post": {
        ...swPostBoard
    }
  }
}

router.post('/board', validator.body(boardSchema), createBoard);
router.get('/board', getBoards);
router.get('/board/:id', getBoardById);
router.put('/board/:id', updatedBoard);
router.delete('/board/:id', deleteBoard);

export default router;