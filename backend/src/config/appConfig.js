require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const appConfig = {
  appPort: process.env.APP_PORT,
  env: process.env.NODE_ENV,
};

module.exports = appConfig;
