const express = require('express');
const router = express.Router();
var multer  = require('multer');

var app = express();
/*
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(multer({dest: './uploads/'}));
*/
var fs = require('fs');
var mongoose = require('mongoose');

var Info = require('./mongo.js');
var Pet = require('./pet.js');

/*router.all('/upload',function(req,res){
     var dirname = require('path').dirname(__dirname);
     var filename = req.files.file.name;
     var path = req.files.file.path;
     var type = req.files.file.mimetype;
      
     var read_stream =  fs.createReadStream(dirname + '/' + path);
 
     var conn = req.conn;
     var Grid = require('gridfs-stream');
     Grid.mongo = mongoose.mongo;
 
     var gfs = Grid(conn.db);
      
     var writestream = gfs.createWriteStream({
        filename: filename
    });
     read_stream.pipe(writestream);
        
});
*/
/*router.get('/file/:id',function(req,res){
      var pic_id = req.param('id');
      var gfs = req.gfs;
 
       gfs.files.find({filename: pic_id}).toArray(function (err, files) {
 
        if (err) {
            res.json(err);
        }
        if (files.length > 0) {
            var mime = 'image/jpeg';
            res.set('Content-Type', mime);
            var read_stream = gfs.createReadStream({filename: pic_id});
            read_stream.pipe(res);
        } else {
            res.json('File Not Found');
        }
    });
});*/
router.get('/user/:id', function(req, res){
	console.log(req.params.id);
	Info.findOne({_id: req.params.id}, function(err, user){
		console.log(user);
		res.send(user);
	});
});

router.get('/pets/', function(req, res){
	Pet.find(function(err, pets){
		console.log(pets);
		res.send(pets);
	});
});

router.get('/pet/:id', function(req, res){
	console.log(req.params.id);
	Pet.findOne({_id: req.params.id}, function(err, pet){
		console.log(pet);
		res.send(pet);
	});
});

router.get('/petowner/:id', function(req, res){
	console.log(req.params.id);
	Pet.findOne({_id: req.params.id}, function(err, pet){
		var newPet = {
			userId: pet.userId,
			name: pet.name,
			age: pet.age,
			gender: pet.gender,
			size: pet.size,
			type: pet.type,
			city: pet.city,
			state: pet.state,
			description: pet.description,
			owner: true
		}
		console.log(newPet);
		res.send(newPet);
	});
});

router.post('/login', function(req, res){
	console.log(req.body);
	Info.findOne({email:req.body.loginEmail, password:req.body.loginPassword}, function(err, user){
		console.log(user);
        res.send({userId: user._id});
    });
});

router.post('/:id', function(req, res){
	console.log(req.body);
	console.log("TeSt");
	new Pet(req.body).save(function(err, pet){
		console.log(pet);
		let petId = pet._id;
		let petName = pet.name;
		let userId = pet.userId;
		let pets = {petName: petName, petId: petId};
		console.log(pets);
        Info.findOneAndUpdate( {_id: userId}, 
        		{ $push: { pets: { petName: petName, petId:petId } } 
        	},
        	function(err, user){
        		console.log(user);
        		res.send({userId: user._id});
        });
    });
});

router.post('/', function(req, res){
	console.log(req.body);
	new Info(req.body).save(function(err, user){
		console.log(user);
        res.send({userId: user._id});
    });
})

module.exports = router;
