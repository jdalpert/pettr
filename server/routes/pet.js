var Mongoose = require('mongoose');

var petSchema = new Mongoose.Schema({ 
	userId: String,
	name: String,
	type: String,
	city: String,
	state: String,
	contactInfo: String,
	description: String
});

module.exports = Mongoose.model('Pet', petSchema);
