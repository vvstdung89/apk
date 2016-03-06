var APKModel = require('../models/APKModel.js');

exports = module.exports = function(req, res){
	var apk = req.body;

	var result = {};
	//check input	
	if ( !apk.name ){
		result.status = "error";
		result.data = "Missing [name]";
		res.json(result)
		return;
	} 

	//check apk exist
	APKModel.findOne(
		{ name: apk.name },
		function(cexist_err, obj){
			if (cexist_err==null  && !obj) { //if not exit
				result.status = "001";
				result.data = "apk is not exist";
				res.json(result)
			} else if (cexist_err==null){ 
				console.log(obj)
				APKModel.update({
					name: apk.name
				},
				apk,function (err, updateFilm) {
					if (err){
						result.status = "004";
						result.data = "Error update";
						res.json(result)
						console.log(result)
						return;
					}
					result.status = "000";
					result.data = apk;
					res.json(result)
				});
			} else {
				result.status = "004";
				result.data = "Cannot access database";
				callback(result)
			}
		}	
	)
}