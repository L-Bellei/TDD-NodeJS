/* eslint-disable no-unused-vars */
const express = require('express');
const userRoutes = require('./routes/users');
const accountRoutes = require('./routes/accounts');

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(accountRoutes);

app.get('/', (req, res) => {
	return res.status(200).send();
});

module.exports = app;
