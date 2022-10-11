import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	bands: [ String ],
	instrument: { type: String },
	albums: [{
		title: { type: String },
		year: { type: Number }
	}],
	birthday: { type: Date },
	createdOn: {
		type: Date,
		default:  Date.now()
	},
});

export default mongoose.model("userInfo", userSchema);

// const UserInfo = mongoose.model("UserInfo", userSchema);

// export default UserInfo 
