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
exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'This route will show all Products from DB',
  });
};
