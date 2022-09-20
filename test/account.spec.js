const request = require('supertest');
const app = require('../src/app');
const UserService = require('../src/services/UserService');

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
