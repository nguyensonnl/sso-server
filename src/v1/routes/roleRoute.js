import express from "express";
import roleController from "../controllers/roleController";

const roleRoute = express.Router();

roleRoute.get("/", roleController.getListRole);
roleRoute.post("/", roleController.createRole);

export default roleRoute;
