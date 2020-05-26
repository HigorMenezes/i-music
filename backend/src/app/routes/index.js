const sessionRoutes = require('./sessionRoutes');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Server is running');
  });

  sessionRoutes(app);
};

module.exports = routes;
