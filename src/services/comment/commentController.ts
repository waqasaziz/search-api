import { DbInterface } from "typings/DbInterface";
import { CommentInstance } from "models/comment";
import { getDB } from "../../middleware/database";

export const findAll = async (): Promise<CommentInstance[]> => {
  const db = getDB();

  const comments = await db.Comment.findAll({});

  return comments;
};
