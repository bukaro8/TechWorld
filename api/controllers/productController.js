const Product = require('../models/product.js');
const data = require('../data/products.json');

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

/////////////////////////////////////////////////////////////////////

// const getInfo = data[0].map((e) => {
// 	return {
// 		id: e._id,
// 		name: e.name,
// 		price: e.price,
// 		description: e.description,
// 		ratings: e.ratings,
// 		images: e.images,
// 		category: e.category,
// 		seller: e.seller,
// 		stock: e.stock,
// 		numOfReviews: e.numOfReviews,
// 		reviews: e.reviews,
// 	};
// });

// exports.idProduct = async (req, res) => {
// 	const { idProduct } = req.params;
// 	try {
// 		const productTotal = await getInfo();
// 		if (idProduct) {
// 			const productId = productTotal.filter((el) => el.id == idProduct);

// 			return productId.length
// 				? res.status(200).send(productId)
// 				: res.status(404).send('El producto ingresado no fue encontrado');
// 		}
// 	} catch (e) {
// 		return res.status(500).send('Debe ingresar un ID valido');
// 	}
// };
