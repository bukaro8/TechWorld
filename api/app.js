const express = require('express');
const app = express();
app.use(express.json());
//!Import all routes
const products = require('./routes/product');
const users = require('./routes/user');
const ventas = require('./routes/ventas');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use('/api/v1', products);
app.use('/api/v1', users);
app.use('/api/v1', ventas);

module.exports = app;
