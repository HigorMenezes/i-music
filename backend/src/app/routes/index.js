const routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Server is running');
  });
};

module.exports = routes;
