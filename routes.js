module.exports = function(app){
	var SerieTV = require('./serietv');

	//GET

	findAllSeriesTV = function(req,res){
		SerieTV.find(function(err,seriestv){
			if(!err) res.send(seriestv);
			else console.log('ERROR' + err);
		});
	};

	//GET

	findByID = function(req,res){
		SerieTV.findById(req.params.id, function(err,serietv){
			if(!err) res.send(serietv);
			else console.log('ERROR' + err);
		});
	};

	//POST

	addSerieTV = function(req,res){
		console.log('POST');
		console.log(req.body);

		var serietv = new SerieTV({
			titulo: req.body.titulo,
			temporadas: req.body.temporadas,
			pais: req.body.pais,
			genero: req.body.genero
		});

		serietv.save(function(err){
			if(!err) console.log('Serie Guardada');
			else console.log('ERROR:'+err);
		});
		res.send(serietv);
	};

	//PUT (UPDATE)

	updateSerieTV = function(req, res){
			SerieTV.findByID(req.params.id, function(err,res){
				serietv.titulo = req.body.titulo;
				serietv.temporadas =req.body.temporadas;
				serietv.pais = req.body.pais;
				serietv.genero = req.body.genero; 

				serietv.save(function(err){
				if(!err) console.log('Serie Actualizada');
				else console.log('ERROR:'+err);

			});

			
			});
	};

	//DELETE

	
	deleteSerieTV = function(req,res){

		SerieTV = function(req, res){
			SerieTV.findById(req.params.id, function(err, serietv){
				serietv.remove(function(err){
					if(!err) console.log('Serie TV Borrada!');
					else console.log('ERROR:' +err);
				});
			});
		};
	};

	//RUTAS

	app.get('/seriestv', findAllSeriesTV);
	app.get('/seriestv/;id', findByID);
	app.post('/seriestv', addSerieTV);
	app.put('/seriestv/:id', updateSerieTV);
	app.delete('/seriestv/:id', deleteSerieTV);

};