var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/test'); 

var userSchema = new Mongoose.Schema({ 
	//_id: Number,
	userName: String,
	userAddress: String,
	userQuote: String
});

module.exports = Mongoose.model('Info', userSchema);
