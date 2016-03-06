var APKModel = require('../models/APKModel.js');
var util = require('./libs/Common.js');


exports = module.exports = function(req,res){
	var position = req.body.pos;

	var redis_client = res.locals.redis_client;
	var range = req.body.range;

	var result = {};
	
	//check input	
	if ( !position || !range  ){
		result.status = "error";
		result.data = "Position, range must be specified.";
		res.json(result);
		return;
	} 

	
	APKModel.find()
	.skip(position)
	.limit(range)
	.exec(function(list_error, objs){
		if (list_error){
			result.status = "error";
			result.data = "Database connection error";
			res.json(result);
			return;
		} else {
			console.log("no redis")
			result.status = "success";
			result.data = objs;
			res.json(result);
			
		}
	})
		
	

	



	

}
