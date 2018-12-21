import mongoose from 'mongoose';

const { Schema } = mongoose;

const PetSchema = new Schema({
  name: {
		type: String,
	},
	breed: {
		type: String,
	},
	age: {
		type: String,
	},
	gender: {
		type: String,
	},
	specied: {
		type: String,
	},
	profile_url: {
		type: String,
	},
	img_url: {
		type: String,
	},
	pet_id: {
		type: String,
	},
	shelter_name: {
		type: String,
	},
});

module.exports = mongoose.model('Pet', PetSchema);