import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sso", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = {};

connectDB.ormSequelizeMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
