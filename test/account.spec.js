const request = require('supertest');
const app = require('../src/app');
const UserService = require('../src/services/UserService');
const AccountService = require('../src/services/AccountService');

const MAIN_ROUTE = '/accounts';
let user;

beforeAll(async () => {
	const res = await UserService.postUser({
		name: 'User Account',
		email: `${Math.floor(Math.random() * 1000)}@gmail.com`,
		password: '123123',
	});

	user = { ...res[0] };
});

test('Deve inserir uma conta com sucesso', async () => {
	const data = { name: '#Acc 1', user_id: user.id };

	const response = await request(app).post(MAIN_ROUTE).send(data);

	expect(response.status).toBe(201);
	expect(response.body).toHaveProperty('name', '#Acc 1');
});

test('Deve listar todas as contas', async () => {
	for (let i = 0; i < 3; i++) {
		await AccountService.postAccount({
			name: `#Acc ${Math.floor(Math.random() * 1200)}`,
			user_id: 111,
		});
	}

	const response = await request(app).get(MAIN_ROUTE);

	expect(response.status).toBe(200);
	expect(response.body.length).toBeGreaterThan(2);
});

test('Deve retornar a conta pelo id', async () => {
	for (let i = 0; i < 3; i++) {
		await AccountService.postAccount({
			name: `#Acc ${Math.floor(Math.random() * 1000)}`,
			user_id: 111,
		});
	}

	const response = await request(app).get(`${MAIN_ROUTE}/${111}`);

	expect(response.status).toBe(200);
	expect(response.body[0]).toHaveProperty('name');
});
