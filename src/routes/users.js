const { Router } = require('express');
const UserController = require('../controllers/UserController');

const userRoutes = Router();

userRoutes.get('/users', new UserController().getUsers);

userRoutes.post('/users', new UserController().postUser);

userRoutes.put('/users/:id', new UserController().updateUser);

module.exports = userRoutes;
