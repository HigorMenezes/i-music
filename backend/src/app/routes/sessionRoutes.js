const {
  requestAuthorization,
  requestAccessToken,
} = require('../controllers/sessionController');

const sessionRoutes = (app) => {
  app.get('/session', requestAuthorization);
  app.get('/session-callback', requestAccessToken);
};

/*
access_token=BQDpzx-khgqlGrxMK8GS-ia4lp_3Fpat8HD9WH-vRWAFRNanXzMVMJERoh8W0Fi4N3rpHSDXEBz4yjFi-OmqtkcCu75U8wL4kLJ3xVW0NbLSLIQcihK_lgUnEEvTXgUGks8QcJPyqUvSUtxQxuasQPF24hXr5htwBphbDWVMn7jShvXylA
expires_in=3600
*/

module.exports = sessionRoutes;
