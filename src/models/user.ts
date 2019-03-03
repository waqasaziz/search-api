import * as Sequelize from "sequelize";

export interface UserAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInstance
  extends Sequelize.Instance<UserAttributes>,
    UserAttributes {
  // At the moment, there's nothing more to add apart
  // from the methods and attributes that the types
  // `Sequelize.Instance<UserAttributes>` and
  // `UserAttributes` give us. We'll add more here when
  //  we get on to adding associations.
}
