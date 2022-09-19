const db = require('../database');

class UserService {
	async getUsers() {
		const users = await db('users').select();

		return users;
	}

	async postUser(user) {
		if (!user.name) return { error: 'O nome é um atributo obrigatório' };

		if (!user.email) return { error: 'O email é um atributo obrigatório' };

		if (!user.password) return { error: 'A senha é um atributo obrigatório' };

		const emails = await db('users').select('email');

		if (emails.find((item) => item.email === user.email))
			return { error: 'Este email já está registrado' };

		const userCreated = await db('users').insert(user, '*');

		return userCreated;
	}
}

module.exports = new UserService();
