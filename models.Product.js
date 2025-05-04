const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
  price: Number,
  compareAtPrice: Number,
  category: String,
  tags: [String],
  productType: String
});

module.exports = mongoose.model('Product', productSchema);
