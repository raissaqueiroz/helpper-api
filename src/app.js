const express = require('express');
const cors = require('cors');
const path = require('path');

const database = require('./database');
const routes = require('./routes');

require('dotenv').config();

class App {
	constructor() {
		this.server = express();

		database.createConnection();

		this.middlewares();
		this.routes();
	}

	middlewares() {
		const allowedOrigins = [
			'http://localhost:3000',
		];

		this.server.use(
			cors({
				origin: function (origin, callback) {
					// allow requests with no origin
					// (like mobile apps or curl requests)
					if (!origin) return callback(null, true);

					if (allowedOrigins.indexOf(origin) === -1) {
						const msg =
							'The CORS policy for this site does not ' +
							'allow access from the specified Origin.';

						return callback(new Error(msg), false);
					}
					return callback(null, true);
				},
			})
		);

		this.server.use(express.json());
	}

	routes() {
		this.server.use(routes);
	}
}

module.exports = new App().server;
