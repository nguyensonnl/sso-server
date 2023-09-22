import express from "express";
import permissionController from "../controllers/permissionController";
const permissionRoute = express.Router();

permissionRoute.get("/", permissionController.getListPermission);
permissionRoute.get("/:id", permissionController.getPermissionById);
permissionRoute.post("/", permissionController.createPermission);
permissionRoute.put("/:id", permissionController.updatePermission);
permissionRoute.delete("/:id", permissionController.deletePermission);

export default permissionRoute;
