const Express = require('express');
const router = Express();

const {
  getProducts,
  newProduct,
  productfindName,

} = require('../controllers/productController.js');

router.get('/products', getProducts);
router.post('/product/new', newProduct);
router.get('/products/findbyname', productfindName);


module.exports = router;
