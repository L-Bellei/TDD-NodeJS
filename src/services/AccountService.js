const db = require('../database');

class AccountService {
	async getAccounts() {
		const accounts = await db('accounts').select();

		return accounts;
	}

	async getAccount(id) {
		const account = await db('accounts').where('id', id).select();

		return account;
	}

	async postAccount(account) {
		const accountCreated = await db('accounts').insert(account, '*');

		return accountCreated;
	}

	async updateAccount(id, account) {
		const accountUpdated = await db('accounts').where('id', id).update(account, '*');

		return accountUpdated;
	}

	async deleteAccount(id) {
		await db('accounts').where('id', id).del();
	}
}

module.exports = new AccountService();
