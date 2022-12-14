const User = require('../models/user.js');

//* Create new user /api/v1/user/new
exports.newUser = async (req, res) => {
	const info = req.body;
	const user = await User.create(info);
	res.status(201).send({
		success: true,
		user,
	});
};
exports.getUsers = async (req, res, next) => {
	const name = req.query.name;
	const user = await User.find();
	if (name) {
		const result = user.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
		result.length
			? res.status(200).send(result)
			: res.status(404).send("user no encontrado")

	} else {
		res.status(200).send(user)
		res.status(404).send("user no encontrado")

	}
};

