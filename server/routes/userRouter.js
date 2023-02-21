const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/userController');
const {check, validationResult}= require('express-validator');
const authenticate = require('../middleware/authenticate')

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

route.get('/update-user/:id',services.update_user)

route.get('/delete-user/:id',controller.delete)

route.post('/update-user/:id',controller.update)

//API
route.post('/api/users',authenticate,[
    check('name','name must be 3+ characters long')
    .exists()
    .isLength({min:3}),
    check('password','password must be 4 characters long')
    .isLength({min:4})
]
,controller.create);
route.delete('/api/users/:id',authenticate,controller.delete);
route.get('/api/users',authenticate,controller.find);
route.post('/api/users/:id',authenticate,controller.update);
route.get('/api/users/:id',authenticate,controller.findUser);

module.exports = route