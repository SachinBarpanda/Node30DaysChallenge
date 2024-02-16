const express = require('express');
const app = express();
const authenticationMiddleware = require('./middleware');

app.use(authenticationMiddleware);

// Your routes go here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});