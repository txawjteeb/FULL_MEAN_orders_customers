var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
  return {
    show: function(req, res) {
    	console.log('here i am in the orders controllers on server-side');
	  Order.find({}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  })
	},

	add: function(req, res) {
		var order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity, date: req.body.date});
		order.save(function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  })
    	console.log("got to ADD my orders on server side controller");
	},


  }
})();