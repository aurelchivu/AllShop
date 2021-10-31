import express from 'express';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import products from './data/products.js';
import users from './data/users.js';
import db from './config/database.js';
import { Product } from './models/Product.js';
import { User } from './models/User.js';

// Load environment variables
dotenv.config();

// Test DB
try {
  await db.sync({ force: true });
  products.map((product) => {
    Product.create({
      name: product.name,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
      rating: product.rating,
      numReviews: product.numReviews,
      price: product.price,
      countInStock: product.countInStock,
    });
  });

  users.map((user) => {
    User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
    });
  });

  console.log(
    'Connection to database has been established successfully...'.yellow.bold
  );
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Route files
import product from './routes/product.js';

const app = express();

app.use(cors());

// HTTP request logger middleware for node.js
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/products', product);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
