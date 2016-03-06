

exports = module.exports = function (app, router){

	app.use("/"+require("./Config.js").service_name, router);
	
	var logic = {
		create : './app/logics/create.js',
		list: './app/logics/list.js',
		delete: './app/logics/delete.js',
		update : './app/logics/update.js',
		getByName: './app/logics/getByName.js',
	}

router.post('/create', require(logic.create));
router.post('/list', require(logic.list));
router.post('/delete', require(logic.delete));
router.post('/update', require(logic.update));
router.post('/getByName', require(logic.getByName));

	
}
