require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/v1/api', (req, res) => {
  res.send('Welcome to the OrangTuaBerdaya API');
});

module.exports = app;