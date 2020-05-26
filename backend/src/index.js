const appConfig = require('./config/appConfig');
const app = require('./app');

app.listen(process.env.PORT || appConfig.appPort, () => {
  console.info(
    `Server is running on port [${
      process.env.PORT || appConfig.appPort
    }] with [${appConfig.env}] env`,
  );
});
