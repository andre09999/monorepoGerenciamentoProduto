require('dotenv').config();

const options = {
  host: process.env.PG_HOST || 'localhost',
  port: process.env.PG_PORT || '5432',
  database: process.env.PG_DATABASE || 'produtos',
  username: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASSWORD || 'postgres_password123',
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
};
