const Express = require('express');
const router = Express();

const {
	getProducts,
	newProduct,
	idProduct,
	putProduct,
	filState
} = require('../controllers/productController.js');

router.get("/product/filterProduct/:state", filState);
router.get('/products', getProducts);
router.get('/product/:id', idProduct);
router.post('/product/new', newProduct);
// router.put('/product/:id', putProduct);
router.post("/product/editProduct", putProduct);

module.exports = router;
