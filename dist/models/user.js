"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = (sequelize, DataTypes) => {
    const attributes = {
        name: {
            type: DataTypes.STRING
        }
    };
    const User = sequelize.define("User", attributes);
    User.associate = models => {
        User.hasMany(models.Comment);
        User.hasMany(models.Post);
        User.belongsToMany(models.Comment, {
            through: "PostUpVotes",
            as: "upVotedComments"
        });
    };
    return User;
};
//# sourceMappingURL=User.js.map