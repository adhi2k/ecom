const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// IMPORT THE PRODUCTS ROUTE
const productRoutes = require('./routes.products');

// MIDDLEWARE
app.use('/api/products', productRoutes);  // Use the route

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
