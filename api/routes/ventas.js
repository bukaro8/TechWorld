const Express = require('express');
const router = Express();

const {
	getVentas,
	getCompras,
} = require('../controllers/ventasControllers.js');

router.get('/ventas', getVentas);
router.get('/compras', getCompras);

module.exports = router;
                    