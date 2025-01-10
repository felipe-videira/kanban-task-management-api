import Board from '../models/board';
import  { Request, Response } from "express";

export const createBoard = async (req: Request, res: Response) => {
  try {
    const board = await Board.create(req.body);
    res.status(200).json(board);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "An error ocurred"});
  }
};