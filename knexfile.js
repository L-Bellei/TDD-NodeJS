module.exports = {
	test: {
		client: 'pg',
		connection: {
			host: 'localhost',
			port: 5050,
			user: 'postgres',
			password: '1523',
			database: 'barriga',
		},
		migrations: {
			directory: 'src/migrations',
		},
	},
};
