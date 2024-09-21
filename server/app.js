const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = dotenv.PORT;

console.log(port);
