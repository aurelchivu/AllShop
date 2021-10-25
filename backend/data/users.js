import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Amin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane User',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
