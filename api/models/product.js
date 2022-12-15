const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter product name'],
		trim: true,
		maxLength: [100, 'Product name can not be longer than 100 character'],
	},
	price: {
		type: Number,
		required: [5, 'Product name can not exceed 5 digits'],
		default: 0.0,
	},
	description: {
		type: String,
		required: [true, 'Please enter product description'],
	},
	ratings: {
		type: Number,
		default: 0,
	},
	images: {
		type: String,
		required: [true, 'Please enter product description'],
	},

	category: {
		type: String,
		required: [true, 'Please select a category '],
		enum: {
			values: [
				'Electronics',
				'Cameras',
				'Laptops',
				'Accessories',
				'Headphones',
				'Consoles',
				'Television',
				'VideoGames',
				'Home',
			],
			message: 'Please select a correct category',
		},
	},
	seller: {
		type: String,
		required: [true, 'Please enter product seller'],
	},
	stock: {
		type: Number,
		required: [true, 'Please enter a stock value'],
		maxLength: [5, 'Product can no be bigger than 5 digits'],
		default: 0,
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				required: true,
			},
			comment: {
				type: String,
				required: true,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model('Product', productSchema);
