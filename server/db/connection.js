const { Sequelize } = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
console.log(MYSQL_USERNAME);
const sequelize = new Sequelize({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  dialect: "mysql",
  logging: false,
});
// console.log(sequelize);
sequelize
  .authenticate()
  .then(() => console.log(`successfully connected to database 🥂`))
  .catch((err) => {
    console.error(`❌ error: ${err}`);
    console.error(`Error details: ${err.original}`);
    console.error(`Error stack: ${err.stack}`);
    process.exit(1); // exit the process with a non-zero exit code
  });

module.exports = sequelize;
