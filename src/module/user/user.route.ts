import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getSingleUser);
router.put("/update/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/create", userController.createUser);

export const userRoute = router;
