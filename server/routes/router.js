const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');
/**
 * @description Root Route
 * @method GET /
 */

route.get('/',services.homeRoutes);

/**
 * @description add users
 * @method GET /add-user
 */

route.get('/add-user',services.add_user)

/**
 * @description update user
 * @method GET /update-user
 */

route.get('/update-user',services.update_user)

//API
route.post('/api/users',controller.create);
route.delete('/api/users/:id',controller.delete);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.get('/api/users/:id',controller.findUser);

module.exports = route