import Sequelize from 'sequelize';
import bcrypt from 'bcryptjs';
import db from '../config/database.js';
import { Order } from './Order.js';
import { Review } from './Review.js';

export const User = db.define(
  'User',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [8],
      },
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      validate: {
        notEmpty: true,
      },
      defaultValue: false,
    },
  },
  {
    hooks: {
      afterValidate: async function (user) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);

User.hasMany(Order, { as: 'allOrders' });
User.hasMany(Review, { as: 'allReviews' });
