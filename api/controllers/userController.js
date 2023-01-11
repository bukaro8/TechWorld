const User = require('../models/user.js');
const Admin = require('../models/admin.js');
// const  findOrCreate  = require ( ' mangosta-findorcreate ' ) 


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

	}
};

exports.getUserAdmin = async (req, res, next) => {
	const userAdmin = [];
	const result = await User.find({ isAdmin: true })
	userAdmin.push(result)
	// console.log(userAdmin);
	res.status(200).send(result)
}

exports.putAdmin = async (req, res) => {
	console.log(`Changing Admin state in BackEnd for id: ${req.params.id}`)
	try {
		const actUser = await User.findById(req.params.id);

		// console.log(actUser)
	
		if (actUser.isAdmin === true) {
			console.log(`${req.params.id} was truely an Admin. Changing...`)
			actUser.isAdmin = "false"
			actUser.role = "usuario"
			console.log(`${actUser} is the new actUser object`)
		}
		else if (actUser.isAdmin === false) {
			console.log(`${req.params.id} was not an Admin. Changing...`)
			actUser.isAdmin = "true"
			actUser.role = "admin"
			console.log(`${actUser} is the new actUser object`)
		}
		await actUser.save();
		res.status(200).json({
			success: true,
			actUser,
		});
	} catch (e) {
		return res.status(500).send('Debe ingresar un ID valido');
	}

};

exports.putBan = async (req, res) => {
	console.log(`Changing Banned state in BackEnd for id: ${req.params.id}`)
	try {
		const actUser = await User.findById(req.params.id);
		console.log(actUser)
		if (actUser.isBan === true) {
			console.log(`${req.params.id} was truely banned. Changing...`)
			actUser.isBan = "false"
			console.log(`${actUser} is the new actUser object`)
		}
		else if (actUser.isBan === false) {
			console.log(`${req.params.id} was not an Admin. Changing...`)
			actUser.isBan = "true"
			console.log(`${actUser} is the new actUser object`)
		}
		await actUser.save();
		res.status(200).json({
			success: true,
			actUser,
		});
	} catch (e) {
		return res.status(500).send('Debe ingresar un ID valido');
	}
}

exports.deleteUser = async (req, res) => {
	const user = await User.findByIdAndDelete(req.params.id);
	res.status(201).send({
		success: true,
		user,
	});
}

exports.putFavoriteUser = async (req, res) => {
	try {
		const { _id, misFavoritos, misCompras, idProduct } = req.body
		const arrayAlgo=[];
		const actualizarFav = await User.findByIdAndUpdate(_id, { misFavoritos: misFavoritos, misCompras: misCompras, idProduct: idProduct });
		console.log("asass",actualizarFav);
		arrayAlgo.push(actualizarFav)
		res.status(200).send(
			arrayAlgo
			// success: true,
			// actUser,
		);

	} catch (e) {
		return res.status(500).send('Debe ingresar un ID valido');
	}

};

exports.getUserData = async (req, res, next) => {
	const { email, address, name } = req.body;
	const userData = [];
	const result = await User.find({ email: email })
	if (result.length) {
		console.log("11",email)
		if (address) {
			const change = await User.findByIdAndUpdate(result[0]._id, {address: address})
			res.status(200).send(change)
		}
		else {
			res.status(200).send(result)
		}
	} else {
		console.log("12",email)  
		const newUser= await User.create({email, address, name})
		res.status(200).send(newUser)
	}
}

