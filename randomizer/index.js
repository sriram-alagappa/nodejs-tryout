var _ = require('underscore');

var randomizer  = {

	between : function (low,high){
		return _.random(low,high);
	}	
};

module.exports = randomizer;