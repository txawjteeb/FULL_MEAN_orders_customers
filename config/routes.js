var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');

module.exports = function(app) {
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	})
	app.post('/customers', function(req, res) {
		customers.add(req, res);
	})
	app.post('/remove_customer', function(req, res) {
		console.log('here in the remove part of routes');
		customers.remove(req, res);
	})
	app.get('/orders', function(req, res) {
		orders.show(req, res);
	})
	app.post('/orders', function(req, res) {
		orders.add(req, res);
	})
};