const Express = require('express');
const router = Express();

const {
	getProducts,
	newProduct,
	idProduct,
	putProduct,
	filState,
	filStock,
	getAdminProduct,
	postReviews
} = require('../controllers/productController.js');

router.get("/product/orderProduct/:stock", filStock);
router.get("/product/filterProduct/:state", filState);
router.get("/admin/products", getAdminProduct);
router.get('/products', getProducts);
router.get('/product/:id', idProduct);
router.post('/product/new', newProduct);
router.post('/product/:id/review', postReviews);
// router.put('/product/:id', putProduct);
router.post("/product/editProduct", putProduct);

module.exports = router;
