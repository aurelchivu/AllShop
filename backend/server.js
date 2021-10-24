import express from 'express';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import products from './data/products.js';
import db from './config/database.js';

// Load environment variables
dotenv.config();

// Test DB
try {
  await db.authenticate();
  console.log('Connection to database has been established successfully...'.yellow.bold);
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(cors());

// HTTP request logger middleware for node.js
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
