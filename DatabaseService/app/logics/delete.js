var util = require('./libs/Common.js');
var APKModel = require('../models/APKModel.js');

exports  = module.exports  = function(req,res){
	var locals = res.locals;
	var result = {};
	var id = req.body.id;
	var redis_client = locals.redis_client;

	APKModel.remove({
		_id: id
	}, function (delete_error){
		if (delete_error){
			result.status = "error";
			result.data = "Database connection error";
			res.json(result);
			return;
		} else {
			result.status = "success";
			result.data = "Delete apk successfully";
			res.json(result);
			redis_client.set("apk/"+key,JSON.stringify(result));
			redis_client.expire("apk/"+key,0);
			return;
		}
	})

}