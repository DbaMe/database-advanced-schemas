import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";

const app = express();
dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// http://localhost:3000/users
app.get('/', (req, res) => {
   
    res.send('Hello User');

})

app.use('/users', userRoutes);
app.use("/articles", articleRoutes);

mongoose
	.connect("mongodb://localhost:27017/userData")
	.then(() =>
		app.listen(port, console.log(`DB connected and listening on ${port} port`))
	)
	.catch((err) => console.log(`${err} Failed connection ...`));

const port = process.env.PORT || 8090;

