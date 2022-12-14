const Ventas = require('../models/ventas.js');

//* Create new product /api/v1/product/new
// exports.newProduct = async (req, res) => {
// 	//!not images here
// 	const info = req.body;
// 	const product = await Product.create(info);
// 	res.status(201).send({
// 		success: true,
// 		product,
// 	});
// };
exports.getVentas = async (req, res, next) => {
    const name = req.query.nombreProduct;
    const ventas = await Ventas.find();
    if (name) {
        const result = ventas.filter((e) => e.nombreProduct.toLowerCase().includes(nombreProduct.toLowerCase()))
        result.length
            ? res.status(200).send(result)
            : res.status(404).send("venta no encontrada")

    } else {
        res.status(200).send(ventas)
    }
};

exports.getCompras = async (req, res, next) => {
    const { cantidadCompras, tipoCompras } = req.query;
    const ventas = await Ventas.find();
    if (tipoCompras) {
        const result = ventas.filter((e) => e.tipoCompras.toLowerCase().includes(tipoCompras.toLowerCase()))
        result.length
            ? res.status(200).send(result)
            : res.status(404).send("venta no encontrada")

    } else {
        res.status(200).send(ventas)
    }
};



// exports.idProduct = async (req, res) => {
// 	const idProduct = req.params.id; //Solicito el id por params
// 	try {
// 		const productTotal = await Product.findOne({
// 			_id: idProduct,
// 		}); //Llamo al modelo y me devuelve un objeto con todos los productos
// 		if (productTotal) {
// 			res.status(200).json({
// 				success: true,
// 				productTotal, //ejecuta este bloque de codigo
// 			});
// 		}
// 	} catch (e) {
// 		return res.status(500).send('Debe ingresar un ID valido'); // en caso de que no pueda entrar a la db
// 	}
// };
