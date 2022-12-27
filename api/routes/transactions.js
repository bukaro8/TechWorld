const Express = require('express');
const router = Express();

const { getTransactions, filterStatus, newTransaction, putTransaction, getLatest } = require('../controllers/transactionsController')

router.get('/transactions', getTransactions);
router.get('/transactions/:status', filterStatus);
router.post('/transactions/new', newTransaction);
router.post('/transactions/editTransaction', putTransaction);


module.exports = router;