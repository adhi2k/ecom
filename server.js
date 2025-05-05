const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes.products');

const app = express();
const uri = "mongodb+srv://testadhithya:nmhLqmL268BpMRv0@cluster0.fosb8wj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use('/api/products', productRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
