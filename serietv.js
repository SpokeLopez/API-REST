var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var serietv = new Schema({
	titulo: String,
	temporadas: Number,
	pais: String,
	genero: {type:String,
			 enum:['Comedia','Fantasia','Drama','Terror','Sci-Fi']
			}
});

module.exports = mongoose.model('SerieTV',serietv);