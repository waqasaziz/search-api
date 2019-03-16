import { Request, Response } from "express";
import * as controller from "./commentController";

export default [
  {
    path: "/api/v1/comments",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const result = await controller.findAll();
        res.status(200).send(result);
      }
    ]
  }
];
