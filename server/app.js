const express = require("express");
require("dotenv").config();
const sequelize = require("./db/connection");

// Import your models
const User = require("./models/User");
const Post = require("./models/Post");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Sync models and create tables
sequelize
  .sync({ force: true }) // force: true drops and recreates the tables each time the app runs
  .then(() => {
    console.log(`Tables created successfully 🥂`);
  })
  .catch((err) => console.error(`Error creating tables: ${err}`));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port} 🥂`);
});
