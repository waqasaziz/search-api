import { DbInterface } from "typings/DbInterface";
import { PostInstance } from "models/post";
import { getDB } from "../../middleware/database";

export const findAll = async (): Promise<PostInstance[]> => {
  const db = getDB();

  const posts = await db.Post.findAll({});

  return posts;
};
