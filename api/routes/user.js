const Express = require('express');

const router = Express();

const {
	getUsers,
	newUser, 
	putAdmin,
	delAdmin,
	getUserAdmin
} = require('../controllers/userController.js');

router.post('/user/new', newUser);
router.get('/users/admin', getUserAdmin);
router.get('/users', getUsers);
router.put('/users/delete/:id', delAdmin);
router.post('/users/id', putAdmin);

module.exports = router;
