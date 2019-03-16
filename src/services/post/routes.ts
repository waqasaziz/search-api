import { Request, Response } from "express";
import * as controller from "./postController";

export default [
  {
    path: "/api/v1/posts",
    method: "get",
    handler: [
      async (req: Request, res: Response) => {
        const result = await controller.findAll();
        res.status(200).send(result);
      }
    ]
  }
];
