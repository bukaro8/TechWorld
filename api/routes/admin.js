const Express = require('express');
const router = Express();

const {
	getAdmin,
	delAdmin,
	putAdmin,
	newAdmin
} = require('../controllers/adminController.js');

router.get('/admin', getAdmin);
router.delete('/admin/:id',delAdmin)
router.post('/admin/new',newAdmin)
router.post('/admin/iduser', putAdmin);

module.exports = router;
