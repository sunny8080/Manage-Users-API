const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');
const userR = require('./routes/userR');
const notFoundR = require('./routes/notFoundR');
const path = require('path');

// load env vars
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 4000;
const app = express();

// connect to database
connectDB();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// body parser
app.use(express.json());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount Routers
app.use('/api/users', userR);

app.get('/', (req, res) => {
  res.status(200).send("Hello Ji");
});

// When requested url not found
app.use('/*', notFoundR);

// custom error middleware
app.use(errorHandler);

// start server
app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  }
});

// handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  // close server & exit process
  // console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
