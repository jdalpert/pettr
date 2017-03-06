var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/test'); 

var userSchema = new Mongoose.Schema({ 
	firstName: String,
	lastName: String,
	email: String,
	city: String,
	state: String,
	dog: Boolean,
	cat: Boolean,
	other: Boolean,
	pet: [
		{
			petId: String
		}
	],
	contactInfo: String,
	description: String,
	organization: String
});

module.exports = Mongoose.model('Info', userSchema);
