import  { Request, Response } from "express";

export const createBaseController = (cb: (req: Request, res: Response) => Promise<void>) => 
  async (req: Request, res: Response) => {
    try {
      await cb(req, res)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "An error has ocurred" });
    }
  };
