import articleInfo from "../models/Article.js";

export const getArticles = async (req, res) => {
	try {
		const articles = await articleInfo.find();
		res.status(200).json(articles);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const postArticle = async (req, res) => {
	const articles = req.body;
	const newArticle = new articleInfo(articles);
	try {
		await newArticle.save();
		res.status(202).json(newArticle);
	} catch (error) {
		res.status(408).json({ message: error.message });
	}
};

// update article by id

export const updateArticle = async (req, res) => {
	try {
		const updateArticle = await articleInfo.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(201).json(updateArticle);
	} catch (error) {
		res.status(409).send({ msg: error.message });
	}
}

// delete article by id

export const deleteArticle = async (req, res) => {
	try {
		await articleInfo.findByIdAndRemove(req.params.id);
		res.status(201).json({ msg: "Article deleted successfully" });
	} catch (error) {
		res.status(409).send({ msg: error.message });
	}
}
