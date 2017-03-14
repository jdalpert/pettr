var Mongoose = require('mongoose');

var petSchema = new Mongoose.Schema({ 
	userId: String,
	name: String,
	type: String,
	city: String,
	state: String,
	description: String,
	age: String,
	size: String,
	gender: String,
	color: String
});

module.exports = Mongoose.model('Pet', petSchema);
