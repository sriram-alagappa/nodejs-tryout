var mongoose  = require ('mongoose');

var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
        name : String
    }
);


module.exports = mongoose.model('Projects',ProjectSchema);