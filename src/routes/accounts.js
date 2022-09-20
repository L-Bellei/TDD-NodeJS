const { Router } = require('express');
const AccountController = require('../controllers/AccountController');

const accountRoutes = Router();

accountRoutes.get('/accounts', new AccountController().getAccounts);

accountRoutes.get('/accounts/:id', new AccountController().getAccount);

accountRoutes.post('/accounts', new AccountController().postAccount);

accountRoutes.put('/accounts/:id', new AccountController().updateAccount);

accountRoutes.delete('/accounts/:id', new AccountController().deleteAccount);

module.exports = accountRoutes;
