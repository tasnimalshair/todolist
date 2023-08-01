require('dotenv').config();

export default () => ({
  database: {
    dialect: process.env.DB_DIALECT || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_NAME || 'tasks',
    },
  jwt: {
    secret: process.env.JWT_SECRET || 'iamtasnimalshair',
  },
  
});