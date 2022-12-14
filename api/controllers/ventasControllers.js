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
    const ventas = await Ventas.find();
    console.log(ventas)
    if (ventas) {
        const result = ventas.map((e) => {
            return {
                ventas_nombre : e.ventas_nombre,
                cantidadVenta: e.ventas_cantidad,
                tipoVenta: e.ventas_tipo_de_pago
            }
        })
        result.length
            ? res.status(200).send(result)
            : res.status(404).send("venta no encontrada")

    } else {
        res.status(200).send('No hay ventas registradas')
    }
};

exports.getCompras = async (req, res, next) => {
    const compras = await Ventas.find();
    console.log(compras)
    if (compras) {
        const result = compras.map((e) => {
            return {
                name : e.nombreProduct,
                cantidad : e.cantidadCompras,
                tipoCompras : e.tipoCompras
            }
        })
        result.length
            ? res.status(200).send(result)
            : res.status(404).send("Compra no encontrada")

    } else {
        res.status(200).send('No hay compras registradas')
    }
}



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
