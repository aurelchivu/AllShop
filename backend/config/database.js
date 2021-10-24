import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
  'allshop',
  'postgres',
  `${process.env.DATABASE_PASS}`,
  {
    host: 'localhost',
    dialect: 'postgres',
    // define: {
    //   freezeTableName: true,
    // },
  }
);

export default db;
