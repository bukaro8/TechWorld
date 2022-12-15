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

exports.delAdmin = async (req, res, next) => {
	const idAdmin = req.params.id; //Solicito el id por params
	try {
		const usuario = await User.updateOne({
			isBan: "true",
		});

		res.status(201).json({
			success: true,
			usuario,
			MessageEven:"se actualizo"
		});
	} catch (e) {
		return res.status(500).send('No se pudo borrar el usuario'); // en caso de que no pueda entrar a la db
	}

}

exports.putAdmin = async (req, res) => {
	const idAdmin = req.params.id; //Solicito el id por params
	try {
		const usuario = await User.updateOne({
			isAdmin: "false",
			isBan: "true",
			rol: "invitado",
			MessageEven:"algo"

		});

		res.status(201).json({
			success: true,
			usuario,
		});
	} catch (e) {
		return res.status(500).send('Debe ingresar un ID valido'); // en caso de que no pueda entrar a la db
	}
};


// exports.idUser = async (req, res) => {
// 	const iduser = req.params.id; //Solicito el id por params
// 	try {
// 		const userTotal = await User.findOne({
// 			_id: iduser,
// 		}); //Llamo al modelo y me devuelve un objeto con todos los user
// 		if (userTotal) {
// 			res.status(200).json({
// 				success: true,
// 				userTotal, //ejecuta este bloque de codigo
// 			});
// 		}
// 	} catch (e) {
// 		return res.status(500).send('Debe ingresar un ID valido'); // en caso de que no pueda entrar a la db
// 	}
// };
