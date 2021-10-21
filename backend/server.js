const express = require('express');
var cors = require('cors');
const products = require('./data/products');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:id', (req, res) => {
  const product = products.find((p) => (p._id === req.params.id));
  res.json(product);
});

app.listen(5000, console.log('Server running on port 5000'));
