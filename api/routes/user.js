const Express = require('express');
const router = Express();

const {
	getUsers,
	newUser,
} = require('../controllers/userController.js');

router.post('/user/new', newUser);
router.get('/users', getUsers);

module.exports = router;
