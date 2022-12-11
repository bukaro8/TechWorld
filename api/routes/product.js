const Express = require('express');
const router = Express();

const {
	getProducts,
	newProduct,
	idProduct,
} = require('../controllers/productController.js');

router.get('/products', getProducts);
router.get('/product/:id', idProduct);
router.post('/product/new', newProduct);

module.exports = router;
