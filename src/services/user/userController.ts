import { DbInterface } from "typings/DbInterface";
import { UserInstance } from "models/user";

export const findAll = async (db: DbInterface): Promise<UserInstance[]> => {
  const users = await db.User.findAll({});
  return users;
};
