import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Amin User',
    email: 'admin@example.com',
    password: '12345678',
    isAdmin: true,
    OrderItemId: 1,
  },
  {
    name: 'John doe',
    email: 'john@example.com',
    password: '12345678',
    isAdmin: false,
    OrderItemId: 2,
  },
  {
    name: 'Jane User',
    email: 'jane@example.com',
    password: '12345678',
    isAdmin: false,
    OrderItemId: 3,
  },
];

export default users;
