const Express = require('express');
const router = Express();

const { getProducts } = require('../controllers/productController.js');

router.get('/products', getProducts);

module.exports = router;
