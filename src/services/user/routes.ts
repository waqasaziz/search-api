import { Request, Response } from "express";
import * as userController from "./userController";
import { getDB } from "../../middleware/database";

export default [
  {
    path: "/api/v1/users",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const db = getDB();
        const result = await userController.findAll(db);
        res.status(200).send(result);
      }
    ]
  }
];
