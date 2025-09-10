import express from "express";
import { adminLogin, getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/dashboard", auth, getDashboard);


export default adminRouter;