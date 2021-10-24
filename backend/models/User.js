import Sequelize from 'sequelize';
import db from '../config/database.js';
import { Order } from './Order.js';
import { Review } from './Review.js';

export const User = db.define('User', {
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
});

User.hasMany(Order, { as: 'AllOrders' });
User.hasMany(Review, { as: 'AllReviews' });
User.sync();
