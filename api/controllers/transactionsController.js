const Transaction = require('../models/transactions')

exports.getTransactions = async (req, res) => {
    const { email } = req.query
    const byEmail = await Transaction.find()

    if (email) {
        const result = byEmail.filter(e => e.userEmail.toLowerCase().includes(email.toLowerCase()));
        result.length ? res.status(200).send(result) : res.status(404).send("Este email no tiene compras");
    }
    else {
        res.status(200).send(byEmail)
    }
}

exports.filterStatus = async (req, res) => {
    const { status } = req.params;
    const statusFiltered = await Transaction.find({status: status});
    const all = await Transaction.find()

    if (status != "All") {
        res.status(200).send(statusFiltered);
    }
    else {
        res.status(200).send(all)
    }
}

exports.newTransaction = async (req, res) => {
    const data = req.body;
    const transaction = await Transaction.create(data);
    res.status(200).send(transaction)
}

exports.putTransaction = async (req, res) => {
    const transaction = await Transaction.findById({_id: req.body._id});
    const newStatus = req.body.status;
    transaction.status = newStatus;
    await transaction.save()
    res.status(200).send(transaction) 
}