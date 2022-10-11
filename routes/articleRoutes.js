import express from "express";
import {
	getArticles,
	postArticle,
    updateArticle,
    deleteArticle
} from "../controllers/articlesController.js";

const router = express.Router();

router
    .get("/", getArticles)
    .post("/", postArticle)
    .patch("/:id", updateArticle)
    .delete("/:id", deleteArticle)

export default router;
