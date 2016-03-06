var util = require('./libs/Common.js');
var APKModel = require('../models/APKModel.js');

exports  = module.exports  = function(req,res){
	var locals = res.locals;
	var redis_client = locals.redis_client;
	var result = {};
	var name = req.body.name;
	
	
	APKModel.findOne({
		name: name
	})
	.exec(function(error, find_res){
		if (error){
			result.status = "004";
			result.data = error;
			res.json(result)
		} else {
			if (find_res) {
				result.status = "000";
				result.data = find_res;
				res.json(result)
			} else {
				result.status = "001";
				result.data = "No video file found";
				res.json(result)
			}
		}
	})
		
}