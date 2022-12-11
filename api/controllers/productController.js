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
	const { name } = req.body;
	const product = await Product.find();
	if (name) {
		const result = product.filter((e) =>
			e.name.toLowerCase().includes(name.toLowerCase())
		);
		res.status(201).send({
			success: true,
			result,
		});
	} else {
		res.status(200).json({
			success: true,
			product,
		});
	}
};

/////////////////////////////////////////////////////////////////////

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
