import { DbInterface } from "typings/DbInterface";
import { UserInstance } from "models/user";
import { getDB } from "../../middleware/database";

export const findAll = async (): Promise<UserInstance[]> => {
  const db = getDB();

  const users = await db.User.findAll({});
  return users;
};
