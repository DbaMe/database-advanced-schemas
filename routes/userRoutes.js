import express from "express";
import {
    getUsers,
    postUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

const router = express.Router();

router
    .get("/", getUsers)
    .post("/", postUser)
    .patch("/:id", updateUser)
    .delete("/:id", deleteUser)

export default router;