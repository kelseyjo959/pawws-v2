import mongoose from 'mongoose';

const Pet = mongoose.model('Pet', new mongoose.Schema({
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
}));

export default Pet;