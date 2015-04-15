var mongoose = require('mongoose');
var customerSchema = new mongoose.Schema({
  name: String,
  date: Date
});
mongoose.model('Customer', customerSchema);
