var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var APKSchema   = new Schema({
	originalLink: String,
	name: {
		type: String,
		unique: true,
		require: true
	},
	rateTotal: Number,
	rateAverage: Number,
	category: String,
	author: String,
	publishDate: String,
	storeLink : String,
	files: [
		{
			downloadLink: String,
			version: String,
			versionID: Number,
			requirement: String,
			downloadTime: String,
			updateTime: String,
			signature: String,
			newFeatures: String,
		}
	],
	
	trailer: String,
	info: String,
	poster: [String],
	xapk: Boolean,
});

exports = module.exports = mongoose.model('APK', APKSchema);