import userInfo from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await userInfo.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Add new user
export const postUser = async (req, res) => {
    const user = req.body;
    const newUser = new userInfo(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Update user by id

export const updateUser = async (req, res) => {
	try {
		const updateUser = await userInfo.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(201).json(updateUser);
	} catch (error) {
		res.status(409).send({ msg: error.message });
	}
};

// Delete user by id

export const deleteUser = async (req, res) => {
    try {
        await userInfo.findByIdAndRemove(req.params.id);
        res.status(201).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(409).send({ msg: error.message });
    }
};