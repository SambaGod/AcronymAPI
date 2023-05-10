import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import { AppDataSource } from './data-source';
import Routes from './routes';

const app = express();

AppDataSource.initialize().then(() => {
  app.use(bodyParser.json());
  const corsOption = {
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE',
    credentials: true,
  };
  app.use(cors(corsOption));
  const port = 8000;

  app.use('/acronym', Routes.AcronymAPI);

  try {
    app.listen(port, () =>
      console.log(`Server is up and running @ http://localhost:${port}`)
    );
  } catch (error) {
    console.error('Server connection failed');
  }
});
