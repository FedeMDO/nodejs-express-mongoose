import express, { Application } from 'express';
import mongoose from 'mongoose';
import config from './config';

// Routes
import greetingsRoute from './routes/greetings';

(async () => {
  await mongoose.connect(config.DB);

  // Boot express
  const app: Application = express();
  app.use(express.json());

  // Bind routes
  app.use('/greetings', greetingsRoute);

  // Start server
  app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}!`));
})();
