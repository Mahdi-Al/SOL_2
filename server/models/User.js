const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");
const Post = require("./Post"); // Import Post to define relationships

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

// Relationship: A User has many Posts, and a Post belongs to a User
User.hasMany(Post, { foreignKey: { allowNull: false } });
Post.belongsTo(User);

module.exports = User;
