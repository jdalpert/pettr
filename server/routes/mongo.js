var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/test'); 
//Mongoose.connect('mongodb://test:test@ds135680.mlab.com:35680/heroku_whq17hnb');

var userSchema = new Mongoose.Schema({ 
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	city: String,
	state: String,
	dog: Boolean,
	cat: Boolean,
	other: Boolean,
	pets: [{
		_id: false,
		petName: String,
		petId: String
	}],
	matches:[{
		requested: String,
		userIdB: String,
		userBFirstName: String,
		userBLastName: String,
		userBContact: String,
		petName: String,
		petId: String,
		pending: Boolean,
		approved: Boolean
	}],
	contactInfo: String,
	description: String,
	organization: String
});

module.exports = Mongoose.model('Info', userSchema);
