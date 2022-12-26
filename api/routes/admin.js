const Express = require('express');
const router = Express();

const {
	getAdmin,
	delAdmin,
	putAdmin,
	newAdmin
} = require('../controllers/adminController.js');

router.put('/admin/:iduser', putAdmin);
router.get('/admin', getAdmin);
router.delete('/admin/:id',delAdmin)
router.post('/admin/new',newAdmin)

module.exports = router;
