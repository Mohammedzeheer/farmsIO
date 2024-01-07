const express = require('express');
require('dotenv').config();
const cors=require('cors')
const client=require('./config/database.js')

const UserRouter = require('./routes/user');
const app = express()
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_SIDE_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use('/', UserRouter);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

client.connect();

module.exports = app;



