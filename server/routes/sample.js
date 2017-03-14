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

router.get('/petPref/:id', function(req, res){
	console.log(req.params.id);
	console.log("SAY THIS");
	Info.findOne({_id: req.params.id}, function(err, user){
		let fullQuery ={
			$and:[]
		}
		let query = {
			$or: []
		};
		console.log(user);
		if(user.dog === true){
			query["$or"].push({type: "Dog"});
			console.log(query);
		}else{
			console.log(user["dog"]);
			console.log("this is the dog");
			console.log(user);
		}
		if(user.cat === true)
			query["$or"].push({type: "Cat"});
		if(user.other === true)
			query["$or"].push({type: "Other"});
		fullQuery["$and"].push({city: user.city});
		fullQuery["$and"].push({state: user.state});
		fullQuery["$and"].push(query);
		console.log(fullQuery);
		Pet.find(fullQuery, function(err, pets){
			console.log(pets);
			res.send(pets);
		})
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

router.post('/match', function(req, res){
	console.log(req.body);
	console.log("TeSt");
	Info.findOne({_id: req.body.ownerId}, function(err, owner){
		console.log("OWNER");
		console.log(owner);
		Info.findOne({_id: req.body.userId}, function(err, ownerB){
			console.log("OWNERB");
			console.log(ownerB);
			Info.findOneAndUpdate({_id: req.body.ownerId}, 
				{ $push: { matches: {
					userIdB: req.body.userId,
					userBFirstName: ownerB.firstName,
					userBLastName: ownerB.lastName,
					userBContact: ownerB.contactInfo,
					petName: req.body.name,
					petId: req.body._id,
					pending: true,
					approved: false
				}}
			}, function(err, addedMatch){
				console.log("addedMatch");
				console.log(addedMatch);
				Info.findOneAndUpdate({_id: req.body.userId},
					{$push: { matches: {
						userIdB: req.body.ownerId,
						userBFirstName: owner.firstName,
						userBLastName: owner.lastName,
						userBContact: owner.contactInfo,
						petName: req.body.name,
						petId: req.body._id,
						pending: true,
						approved: false
					}}
				}, function(err, finished){
					console.log(finished);
					res.send(finished);
				})
			})
		})
	});
});

router.post('/:id', function(req, res){
	console.log(req.body);
	console.log("TeSt2");
	new Pet(req.body).save(function(err, pet){
		console.log(pet);
		let petId = pet._id;
		let petName = pet.name;
		let userId = pet.userId;
		let pets = {petName: petName, petId: petId};
		console.log(pets);
        Info.findOneAndUpdate( {_id: userId}, 
        		{ $push: { pets: { petName: petName, petId:petId } } },
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
