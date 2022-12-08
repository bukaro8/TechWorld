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
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};
