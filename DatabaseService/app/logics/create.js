var APKModel = require('../models/APKModel.js');
var Common = require('./libs/Common.js');

//key = drive_name 

function createApk(apk, callback){
	var newApk = new APKModel();

	newApk.name = apk.name;
	newApk.category = apk.category
	newApk.author = apk.author
	newApk.publishDate = apk.publishDate
	newApk.storeLink = apk.storeLink
	newApk.files = apk.files
	newApk.rateTotal = apk.rateTotal;
	newApk.rateAverage = apk.rateAverage;
	newApk.trailer= apk.trailer;
	newApk.info= apk.info;
	newApk.poster= apk.poster;
	newApk.xapk = apk.xapk == "true" ? true : apk.xapk == "false" ? false : apk.xapk;
	newApk.originalLink = apk.originalLink;
	
	newApk.save(function(err){
		callback(err, newApk);
	})
}

exports = module.exports = function(req,res){
	var apk = req.body;
	var result = {};
	

	createApk(apk, function(create_err,newApk){
		if (create_err) {
			result.status = "error";
			result.data = create_err;
			res.json(result);
		} else {
			result.status = "success";
			result.data = newApk;
			console.log(newApk);
			res.json(result);
		}
	})

}
