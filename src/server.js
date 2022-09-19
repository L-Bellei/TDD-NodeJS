/* eslint-disable no-undef */
const app = require('./app');
require('dotenv/config');

const port = process.env.PUBLIC_PORT;

app.listen(port, () => console.log(`App is running on port: ${port}`));
