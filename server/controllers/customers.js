var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    show: function(req, res) {
    	console.log("got into SHOW server side controller");
	  Customer.find({}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  })
	},

	add: function(req, res) {
		var customer = new Customer({name: req.body.name, date: req.body.date});
		customer.save(function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  })
    	console.log("got to ADD my customer on server side controller");
	},

	remove: function(req, res) {
		console.log('REMOVING DATA', req.body);
		Customer.remove({_id: req.body._id}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      res.json(results);
	    }
	  })
    	console.log("CONFIRM: REMOVED my customer from my database");
	},
  }
})();