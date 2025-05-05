const mongoose = require('mongoose');
const Product = require('./models.Product');
const products = require('./products.json');

mongoose.connect('process.env.MONGO_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function seedDB() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded successfully!');
  mongoose.disconnect();
}

seedDB();
