const { Router } = require('express');

const ClienteController = require('./app/controllers/ClienteController');

const routes = new Router();


/*	ROTAS DE CLIENTES  */
routes.post('/clients', ClienteController.store);
routes.get('/clients',  ClienteController.index);
routes.put('/clients/:client_id', ClienteController.update);
routes.get('/clients/:client_id', ClienteController.show);
routes.delete('/clients/:client_id', ClienteController.destroy);


module.exports = routes;
