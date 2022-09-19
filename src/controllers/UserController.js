const UserService = require('../services/UserService');

class UserController {
	async getUsers(req, res) {
		try {
			const users = await UserService.getUsers();

			return res.status(200).json(users);
		} catch (err) {
			return res.status(400).json({ error: 'Erro interno no servidor' });
		}
	}

	async postUser(req, res) {
		try {
			const { name, email, password } = req.body;

			const user = await UserService.postUser({ name, email, password });

			if (user.error) return res.status(400).json(user);

			return res.status(201).json(user[0]);
		} catch (err) {
			return res.status(400).json({ error: 'Erro interno no servidor' });
		}
	}

	async updateUser(req, res) {
		try {
			const { id } = req.params;
			const { name, email, password } = req.body;

			const user = await UserService.updateUser(id, { name, email, password });

			return res.status(200).json(user);
		} catch (err) {
			return res.status(400).json({ error: 'Erro interno no servidor' });
		}
	}
}

module.exports = UserController;
