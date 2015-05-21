var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portSchema = new Schema(
	{
		name:  String,
		_id: String,
		position:[{
			x: Number,
			y: Number
		}],
		maxWidth: Number,
		maxLength: Number
	},
	{
		collection: 'ports'
	}
);

portSchema.index({ _id: 1},{unique:true});
var Port = mongoose.model('Port', portSchema);

module.exports = Port;