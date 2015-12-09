var mongoose = require('mongoose');

mongoose.connect('mongodb://admin2:admin1234@ds063134.mongolab.com:63134/cricut_projects');


var db = mongoose.connection;



db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
console.log('connected.');
testSchema();
});

function testSchema() {



	var Schema = mongoose.Schema;

	var userSchema = new Schema({
		name : String,
		age : Number,
		DOB : Date,
		isAlive : Boolean
	});

	 
	userSchema.methods.isYounger = function () {
		return this.model('User').age < 50 ? true : false;
	}

	var User = mongoose.model('User', userSchema);


	var sree = new User({
	name : 'sree',
	age : 99,
	DOB : '01/01/2000',
	isAlive : true
	});


	sree.save(function (err, data) {
		if (err) console.log(err);
		else 
		{
			console.log('Saved : ', data );
			console.log('isYounger',sree.isYounger());
		}
	});




	

}