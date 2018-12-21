import mongoose from 'mongoose';

const { Schema } = mongoose;

const ShelterSchema = new Schema({
	name: {
		type: String,
	},
	url: {
		type: String,
	},	
});

module.exports = mongoose.model('Shelter', ShelterSchema);