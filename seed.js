const mongoose = require('mongoose');
const Product = require('./models.Product');
const products = require('./products.json');

mongoose.connect('const uri = "mongodb+srv://testadhithya:nmhLqmL268BpMRv0@cluster0.fosb8wj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";', {
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
