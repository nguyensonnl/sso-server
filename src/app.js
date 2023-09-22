import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import APIRoute from "./v1/routes/index";
import configCors from "./config/cors";
import connectDB from "./config/connectDB";

//init db
connectDB.ormSequelizeMySQL();

//init express
export const app = express();

//init cors
configCors(app);
app.use(cors());

//init body-parser and cookie-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//init route
app.get("/", (req, res, next) => {
  res.send("API server is running");
  next();
});

app.use("/api/v1", APIRoute);

app.all("*", (req, res, next) => {
  res.status(404).send("Not found");
});
