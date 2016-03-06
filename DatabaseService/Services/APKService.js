var request = require('request');
var service_name = "APKService";

exports = module.exports = {

	//info must have (email, password, recovery_email, phone)
	create: function(info, callback){
		var caller = "create";
		var service_location = "http://" + require('../Config.js').getService(service_name)[0]+"/"+service_name;
		request.post(
		    service_location + '/' + caller,
		    { form: info },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            callback(null, body);
		        } else if (error){
		        	callback(error, body);
		        } else {
					callback(true, "Reply status code: " + response.statusCode);
		        }
		    }
		);
	},

	//info must have (email or id)
	remove: function(info, callback){
		var caller = "remove";
		var service_location = "http://" + require('../Config.js').getService(service_name)[0]+"/"+service_name;
		request.post(
		    service_location + '/' + caller,
		    { form: info },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            callback(null, body);
		        } else if (error){
		        	callback(error, body);
		        } else {
					callback(true, "Reply status code: " + response.statusCode);
		        }
		    }
		);
	},


	//info must have (email or id)
	getByName: function(info, callback){
		var caller = "getByName";
		var service_location = "http://" + require('../Config.js').getService(service_name)[0]+"/"+service_name;
		request.post(
		    service_location + '/' + caller,
		    { form: info },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            callback(null, body);
		        } else if (error){
		        	callback(error, body);
		        } else {
					callback(true, "Reply status code: " + response.statusCode);
		        }
		    }
		);
	},


	//info must have pos and range
	list: function(info, callback){
		var caller = "list";
		var service_location = "http://" + require('../Config.js').getService(service_name)[0]+"/"+service_name;
		request.post(
		    service_location + '/' + caller,
		    { form: info },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            callback(null, body);
		        } else if (error){
		        	callback(error, body);
		        } else {
					callback(true, "Reply status code: " + response.statusCode);
		        }
		    }
		);
	},


	//update account
	// email or id and at least: free_space,	tokens,	status,	name, lock, sock
	update: function(info, callback){
		var caller = "update";
		var service_location = "http://" + require('../Config.js').getService(service_name)[0]+"/"+service_name;
		request.post(
		    service_location + '/' + caller,
		    { form: info },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            callback(null, body);
				} else if (error){
		        	callback(error, body);
		        } else {
					callback(true, "Reply status code: " + response.statusCode);
		        }
		    }
		);
	},
	
};
