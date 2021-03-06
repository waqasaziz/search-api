import { Request, Response } from "express";
import * as controller from "./userController";

export default [
  {
    path: "/api/v1/users",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const result = await controller.findAll();
        res.status(200).send(result);
      }
    ]
  }
];
