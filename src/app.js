require('dotenv').config();
const express = require('express');
const cors = require('cors');
import errorHandler from './middleware/errorHandler.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/v1/api', (req, res) => {
  res.send('Welcome to the OrangTuaBerdaya API');
});

app.use(errorHandler);

module.exports = app;