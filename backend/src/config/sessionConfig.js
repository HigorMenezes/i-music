require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const sessionConfig = {
  baseUrl: process.env.SESSION_BASE_URL,
  clientId: process.env.SESSION_CLIENT_ID,
  clientSecret: process.env.SESSION_CLIENT_SECRET,
  responseType: process.env.SESSION_RESPONSE_TYPE,
  redirectUri: process.env.SESSION_REDIRECT_URI,
  state: process.env.SESSION_STATE,
  scope: process.env.SESSION_SCOPE,
  homeUri: process.env.SESSION_HOME_URI,
};

module.exports = sessionConfig;
