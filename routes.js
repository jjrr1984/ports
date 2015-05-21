module.exports = function(app){

	/*
		@description: Ports list service
	*/
    app.get('/db/ports/',function(req,res){
    	var portsModel = require('./models/port');
    	portsModel.find({},function (err, ports) {
			if(err){
				res.status(500);
				res.send("Error in database query");
			}else{
				res.send(ports);
			}
		});
	});

	/*
		@description: Creating port
	*/
    app.post('/db/ports/',function(req,res){
    	var portsModel = require('./models/port');
    	var portInfo = req.body.info;
    	portsModel.create(portInfo,function(err,docs){
    		if(err){
    			res.status(500);
    			res.send("Error in database query");
    		}else{
    			res.send("Creation successful");
    		}
    	});
	});

	/*
		@description: Updating port
	*/
    app.put('/db/ports/:portID',function(req,res){
    	var portsModel = require('./models/port');
    	var portID = req.params.portID;
    	var portInfo = req.body.info;
    	portsModel.update({'_id':portID},portInfo,{'upsert': false,'multi': false},function(err,raw){
    		if(err){
    			res.status(500);
    			res.send("Error in database query");
    		}else{
    			res.send("Update successful");
    		}
    	});
	});

    /*
		@description: Removing port
	*/
    app.delete('/db/ports/:portID',function(req,res){
    	var portsModel = require('./models/port');
    	var portID = req.params.portID;
    	portsModel.remove({'_id':portID},function(err){
    		if(err){
    			res.status(500);
    			res.send("Error in database query");
    		}else{
    			res.send("Deletion successful");
    		}
    	});
	});

	/*
		@description: the root service
	*/
	app.get('*',function(req,res){
		res.sendFile(__dirname + '/views/index.html');
	});
};