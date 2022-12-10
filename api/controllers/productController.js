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
    const result = product.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    res.status(201).send({
      success: true,
      result
    });

  } else {
    res.status(200).json({
      success: true,
      product,
    })
  }
};
// products/findbyname
// exports.productfindName = async (req, res) => {
//   const { name } = req.body;
//   if (result.length) {
//   } else {
//     res.status(
//       404
//       // (error) => {error: error.message}
//     ).send("producto no encontrado")
//   }
// };