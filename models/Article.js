import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	keywords: [String],
	category: { type: String },
	comments: [
		{
			text: { type: String },
			user: { type: String },
		}
	],
});

export default mongoose.model("articleInfo", articleSchema);
