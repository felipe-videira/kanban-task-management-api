import { BoardSchemaType, swBoardSchema } from '../schemas/board';
import { create, del, get, getById, update } from '../services/boardService';
import { createBaseController } from './baseController';

export const swPostBoard = {
  "summary": "Create a new board",
  "tags": [
    "board"
  ],
  "requestBody": {
    "content": {
      "application/json": {
          "schema": {
            ...swBoardSchema
          }
      }
    }
  },
  "responses": {
    "201": {
      "description": "Board created"
    }
  }
}
export const createBoard = createBaseController(async (req, res) => {
  const data = await create(req.body as BoardSchemaType);
  res.status(201).json(data);
});

export const getBoards = createBaseController(async (req, res) => {
  const data = await get();
  res.status(200).json(data);
});

export const getBoardById = createBaseController(async (req, res) => {
  const data = await getById(req.params.id);
  
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Board not found' });
  }
});

export const updatedBoard = createBaseController(async (req, res) => {
  const data = await update(req.params.id, req.body as BoardSchemaType);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'Board not found' });
  }
});

export const deleteBoard = createBaseController(async (req, res) => {
  await del(req.params.id);
  res.status(200).json({ message: 'The board was deleted'});
});

