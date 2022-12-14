const Product = require('../models/product');
const User = require('../models/user');
const Admin = require('../models/admin');

const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/products');
const user = require('../data/user');
const admin = require('../data/admin');

// Setting dotenv file
dotenv.config({ path: 'api/config/config.env' });

connectDatabase();

const addProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Products are deleted');

    await Product.insertMany(products);
    console.log('All Products are added.');

    await User.deleteMany();
    console.log('users are deleted');

    await User.insertMany(user);
    console.log('All users are added.');

    await Admin.deleteMany();
    console.log('admin are deleted');

    await Admin.insertMany(admin);
    console.log('Admin users are added.');

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

addProducts();
