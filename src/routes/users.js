const { Router } = require('express');
const UserService = require('../services/UserService');
const userRoutes = Router();

userRoutes.get('/users', async (req, res) => {
	const users = await UserService.getUsers();

	return res.status(200).json(users);
});

userRoutes.post('/users', async (req, res) => {
	const { name, email, password } = req.body;

	const user = await UserService.postUser({ name, email, password });

	if (user.error) return res.status(400).json(user);
	return res.status(201).json(user[0]);
});

module.exports = userRoutes;
