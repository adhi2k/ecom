const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes.products');

const app = express();
mongoose.connect('mongodb://localhost:27017/ecommerce');

app.use('/api/products', productRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
