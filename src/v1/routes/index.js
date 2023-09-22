import express from "express";
import userRoute from "./userRoute";
import permissionRoute from "./permissionRoute";
import roleRoute from "./roleRoute";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("API OK");
});

route.use("/user", userRoute);
route.use("/role", roleRoute);
route.use("/permission", permissionRoute);

export default route;
