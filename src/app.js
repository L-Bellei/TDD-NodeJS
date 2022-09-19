/* eslint-disable no-unused-vars */
const express = require('express');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.json());

app.use(userRoutes);

app.get('/', (req, res) => {
	return res.status(200).send();
});

module.exports = app;
