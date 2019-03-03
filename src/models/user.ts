import * as Sequelize from "sequelize";
import { CommentAttributes, CommentInstance } from "models/Comment";
import { PostAttributes, PostInstance } from "models/Post";
import { SequelizeAttributes } from "typings/SequelizeAttributes";

export interface UserAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInstance
  extends Sequelize.Instance<UserAttributes>,
    UserAttributes {}

export const UserFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<UserInstance, UserAttributes> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    name: {
      type: DataTypes.STRING
    }
  };

  const User = sequelize.define<UserInstance, UserAttributes>(
    "User",
    attributes
  );

  return User;
};
