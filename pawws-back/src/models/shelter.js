import mongoose from 'mongoose';

const Shelter = mongoose.model('Shelter', new mongoose.Schema({
	name: {
		type: String,
	},
	url: {
		type: String,
	},
}));

export default Shelter;
