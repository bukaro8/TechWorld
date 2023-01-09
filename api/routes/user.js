const Express = require('express');
const router = Express();

const {
	getUsers,
	newUser,
	putAdmin,
	deleteUser,
	getUserAdmin,
	putBan
} = require('../controllers/userController.js');

router.post('/user/new', newUser);
router.get('/users/admin', getUserAdmin);
router.get('/users', getUsers);
router.put('/users/admin/:id', putAdmin);
router.put('/users/ban/:id', putBan);
router.delete('/users/delete/:id', deleteUser);

module.exports = router;
