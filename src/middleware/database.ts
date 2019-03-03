import { createModels } from "../models";
import { DbInterface } from "typings/DbInterface";

const sequelizeConfig = require("../config/sequelizeConfig.json");
let _db: DbInterface;

export const initDB = () => {
  if (_db) return;

  _db = createModels(sequelizeConfig);
  _db.sequelize.sync(); // tells Sequelize to sync all defined models to db
};

export const getDB = (): DbInterface => _db;
