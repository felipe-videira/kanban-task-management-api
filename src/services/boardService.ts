import Board, { BoardType } from '../models/board';

export const create = async (data: BoardType) => {
  const { title, _id } = await Board.create(data)
  return { title, _id }
};

export const update = async (id: string, data: BoardType) => {
  return Board.findOneAndUpdate({ _id: id, deleted: 0 }, data, { new: true, projection: { title: 1 } })
};

export const get = async () => {
  return Board.find({ deleted: 0 }, { title: 1 })
};

export const getById = async (id: string) => {
  const boards = await Board.find({ _id: id, deleted: 0 }, { title: 1 })
  return boards.length === 1 ? boards[0] : null;
};

export const del = async (id: string) => {
  return Board.updateOne({ _id: id }, { deleted: 1 })
};
