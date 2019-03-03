"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = (sequelize, DataTypes) => {
    const attributes = {
        name: {
            type: DataTypes.STRING
        }
    };
    const User = sequelize.define("User", attributes);
    return User;
};
//# sourceMappingURL=User.js.map