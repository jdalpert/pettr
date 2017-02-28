var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/test'); 

var userSchema = new Mongoose.Schema({ 
	firstName: String,
	lastName: String,
	email: String,
	pet: [
		{
			type: String,
			name: String,
			age: Number,
		}
	]
});

module.exports = Mongoose.model('Info', userSchema);
