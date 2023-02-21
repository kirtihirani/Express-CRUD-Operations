const express = require('express');
const route = express.Router();

route.get('/user',require('./server/routes/userRouter'));
route.get('/book',require('./server/routes/bookRouter'));

module.exports = route;