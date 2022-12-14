const Express = require('express');
const router = Express();

const {
	getAdmin,
	delAdmin,
	putAdmin,
} = require('../controllers/adminController.js');

router.put('/admin/:iduser', putAdmin);
router.get('/admin', getAdmin);
router.delete('/admin/:id',delAdmin)


module.exports = router;
