const express = require('express');
const route = express.Router()
const controller = require('../controller/bookController')

route.post('/api/books',controller.addBook);
route.get('/api/books',controller.findAllBooks);
route.get('/api/books/:id',controller.findBook);
route.put('/api/books/:id',controller.updateBook);
route.delete('/api/books/:id',controller.deleteBook);



module.exports = route