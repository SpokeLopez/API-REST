var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/seriestv', function(err,res){
	if(err) console.log('Error en la conexion:' +err);
	else console.log('Conexion Exitosa');
});

app.get(function(){
	 app.use(express.bodyParser());
	 app.use(express.methodOverride());
	 app.use(app.router);
});

app.get('/',function(req,res){
	res.send('Hola Mundo');
});

require('./routes')(app);

app.listen(3000);

console.log('escuchando');