const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', async () => {
	const response = await request(app).get('/users');

	expect(response.status).toBe(200);
	expect(response.body.length).toBeGreaterThan(0);
	expect(response.body[0]).toHaveProperty('name');
});

test('Deve ser possivel inserir usuário', async () => {
	const data = {
		name: 'José',
		email: `${Math.floor(Math.random() * 1000)}@gmail.com`,
		password: 'leobellei',
	};

	const response = await request(app).post('/users').send(data);

	expect(response.status).toBe(201);
	expect(response.body).toHaveProperty('name', 'José');
	expect(response.body).toHaveProperty('email', data.email);
});

test('Não deve deixar inserir usuario sem nome', async () => {
	const data = {
		email: `${Math.floor(Math.random() * 1000)}@gmail.com`,
		password: 'leobellei',
	};
	const response = await request(app).post('/users').send(data);

	expect(response.status).toBe(400);
	expect(response.body.error).toBe('O nome é um atributo obrigatório');
});

test('Não deve deixar inserir usuario sem email', async () => {
	const data = {
		name: 'Jose',
		password: 'leobellei',
	};
	const response = await request(app).post('/users').send(data);

	expect(response.status).toBe(400);
	expect(response.body.error).toBe('O email é um atributo obrigatório');
});

test('Não deve deixar inserir usuario sem senha', async () => {
	const data = {
		name: 'Jose',
		email: `${Math.floor(Math.random() * 1000)}@gmail.com`,
	};
	const response = await request(app).post('/users').send(data);

	expect(response.status).toBe(400);
	expect(response.body.error).toBe('A senha é um atributo obrigatório');
});

test('Não deve deixar inserir email já cadastrado', async () => {
	const data = {
		name: 'leo',
		email: 'leobellei@gmail.com',
		password: 'leobellei',
	};
	const response = await request(app).post('/users').send(data);

	expect(response.status).toBe(400);
	expect(response.body.error).toBe('Este email já está registrado');
});
