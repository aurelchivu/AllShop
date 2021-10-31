import Sequelize from 'sequelize';
import db from '../config/database.js';
import { OrderItem } from './OrderItem.js';
import { PaymentResult } from './PaymentResult.js';
import { ShippingAddress } from './ShippingAddress.js';

export const Order = db.define('Order', {
  paymentMethod: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  taxPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  shippingPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isPaid: {
    type: Sequelize.BOOLEAN,
    validate: {
      notEmpty: true,
    },
    defaultValue: false,
  },
  paidAt: {
    type: Sequelize.DATE,
  },
  isDelivered: {
    type: Sequelize.BOOLEAN,
    validate: {
      notEmpty: true,
    },
    defaultValue: false,
  },
  deliveredAt: {
    type: Sequelize.DATE,
  },
});

Order.hasMany(OrderItem, { as: 'allItems' });
Order.hasOne(ShippingAddress);
Order.hasOne(PaymentResult);

