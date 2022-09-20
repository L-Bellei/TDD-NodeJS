const AccountService = require('../services/AccountService');

class AccountController {
	async getAccounts(req, res) {
		try {
			const { id } = req.params;
			const accounts = await AccountService.getAccount(id);

			return res.status(200).json(accounts);
		} catch (err) {
			return res.status(500).json({ error: 'Erro interno no servidor' });
		}
	}

	async getAccount(req, res) {
		try {
			const accounts = await AccountService.getAccounts();

			return res.status(200).json(accounts);
		} catch (err) {
			return res.status(500).json({ error: 'Erro interno no servidor' });
		}
	}

	async postAccount(req, res) {
		try {
			const { name, user_id } = req.body;

			const account = await AccountService.postAccount({ name, user_id });

			return res.status(201).json(account[0]);
		} catch (err) {
			return res.status(500).json({ error: 'Erro interno no servidor' });
		}
	}

	async updateAccount(req, res) {
		try {
			const { id } = req.params;
			const { name, user_id } = req.body;

			const account = await AccountService.updateAccount(id, { name, user_id });

			return res.status(200).json(account);
		} catch (err) {
			return res.status(500).json({ error: 'Erro interno no servidor' });
		}
	}

	async deleteAccount(req, res) {
		try {
			const { id } = req.params;

			await AccountService.deleteAccount(id);

			return res.status(204).end();
		} catch (err) {
			return res.status(500).json({ error: 'Erro interno no servidor' });
		}
	}
}

module.exports = AccountController;
