const Product = require('../models/product.js');

//* Create new product /api/v1/product/new
exports.newProduct = async (req, res) => {
	//!not images here
	const info = req.body;
	const product = await Product.create(info);
	res.status(201).send({
		success: true,
		product,
	});
};
exports.getProducts = async (req, res, next) => {
	const name = req.query.name;
	const product = await Product.find({ state: true });
	if (name) {
		const result = product.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
		result.length
			? res.status(200).send(result)
			: res.status(404).send("producto no encontrado")

	} else {
		res.status(200).send(product)
	}
};
exports.getAdminProduct = async (req, res, next) => {
	const name = req.query.name;
	const product = await Product.find();
	if (name) {
		const result = product.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
		result.length
			? res.status(200).send(result)
			: res.status(404).send("producto no encontrado")

	} else {
		res.status(200).send(product)
	}
};

exports.idProduct = async (req, res) => {
	const idProduct = req.params.id; //Solicito el id por params
	try {
		const productTotal = await Product.findOne({
			_id: idProduct,
		}); //Llamo al modelo y me devuelve un objeto con todos los productos
		if (productTotal) {
			res.status(200).json({
				success: true,
				productTotal, //ejecuta este bloque de codigo
			});
		}
	} catch (e) {
		return res.status(500).send('Debe ingresar un ID valido'); // en caso de que no pueda entrar a la db
	}
};

exports.putProduct = async (req, res) => {
	try {
		const { _id, stock, price, state } = req.body
		const actProduct = await Product.findByIdAndUpdate(_id, { stock: stock, price: price, state: state });
		res.status(200).send({
			success: true,
			actProduct,
		});
	} catch (e) {
		return res.status(500).send("Debe ingresar un ID valido");
	}
};

exports.filState = async (req, res) => {
	try {
		const { state } = req.params;


		if (state === "all") {
			res.status(200).json(await Product.find());
		} else {
			if (state === "true") {
				res.status(200).json(await Product.find({ state: true }));
			} else {
				res.status(200).json(await Product.find({ state: false }));
			}
		}
	} catch (e) {
		return res.status(500).send("Debe ingresar");
	}
};
exports.filStock = async (req, res) => {
	try {
		const { stock } = req.params;
		if (stock === "all") {
			res.status(200).json(await Product.find());
		} else {
			if (stock === "asc") {
				res.status(200).json(await Product.find().sort({ stock: 1 }));
			} else {
				res.status(200).json(await Product.find().sort({ stock: -1 }));
			}
		}
	} catch (e) {
		return res.status(500).send("------");
	}
};