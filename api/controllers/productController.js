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
  const { idProduct } = req.params;   //Solicito el id por params
  try{
    const productTotal = await Product.find(); //Llamo al modelo y me devuelve un objeto con todos los productos
    const productById = Array.from(productTotal) //Lo convierto en array
if(idProduct){ 
  const productId = productById.filter( el => el.id === idProduct )  //Si le paso un id que me devuelva solo el que coincida con el id

  return productId.length ?  //Si hay algo en el array 
  res.status(200).json({ success: true, productId, //ejecuta este bloque de codigo
 }) :
  res.status(404).send('El producto ingresado no fue encontrado') //si no, este bloque
} 
}catch(e){
    return res.status(500).send('Debe ingresar un ID valido')  // en caso de que no pueda entrar a la db
}
}


