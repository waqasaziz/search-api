import { Request, Response, NextFunction } from "express";
import { HTTP400Error, HTTP404Error } from "../utils/httpErrors";
import { DbInterface } from "typings/DbInterface";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.q) {
    throw new HTTP404Error("Missing q parameter");
  } else {
    next();
  }
};
