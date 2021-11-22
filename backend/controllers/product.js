import ErrorResponse from '../utils/ErrorResponse.js';
import asyncHandler from '../middleware/async.js';
import { Product } from '../models/Product.js';

// @desc      Create new product
// @route     POST /api/v1/products
// @access    Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json(product);
});

// @desc      Get all products
// @route     GET /api/v1/products
// @access    Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.findAll();

  res.status(200).json(products);
});

// @desc      Get product by ID
// @route     GET /api/v1/products/:id
// @access    Public
export const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`No product found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json(product);
});

// @desc      Update product
// @route     PUT /api/v1/products/:id
// @access    Private/Admin
export const updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findByPk(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }

  await product.update(req.body);

  res.status(200).json(product);
});

// @desc      Delete product
// @route     DELETE /api/v1/products/:id
// @access    Private/Admin
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
    );
  }

  await product.destroy();

  res.status(200).json({ message: 'Product removed' });
});
