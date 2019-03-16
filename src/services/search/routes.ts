import { Request, Response } from "express";
import { getPlacesByName } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";
import { getDB } from "../../middleware/database";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        res.status(200).send(result);
      }
    ]
  }
];
