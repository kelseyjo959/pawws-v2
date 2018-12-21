import mongoose from 'mongoose';

const Pet = mongoose.model('Pet');

let petLimit;
let shelterName;
let petSkipCounter;
let skipCount;
let mySort;

function getPetLimit(screenWidth) {
	if (screenWidth < 400) {
		petLimit = 14;
	} if (screenWidth > 401 && screenWidth < 960) {
		petLimit = 22;
	}
	petLimit = 32;
}


export const getPets = (req, res) => { // eslint-disable-line
  console.log('inside pets')
	const screenWidth = req.headers.screensize;
	petSkipCounter = req.headers.count;
	shelterName = req.headers.shelter;

	petLimit = getPetLimit(screenWidth);
	skipCount = parseInt(petSkipCounter);
	mySort = { _id: -1 };

	if (shelterName === '') {
		Pet.find({}).sort(mySort).skip(skipCount).limit(petLimit)
			.toArray((err, result) => {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.json({
						mongoPetArray: result,
					});
				} else {
					res.send('No more pets to be seen!');
				}
			});
	} else if (shelterName === 'Stray Rescue of St Louis' || shelterName === 'Adopt a Senior Pet' || shelterName === 'NYC Shelter Buddy') {
		Pet.find({ shelter_name: shelterName }).sort(mySort).skip(skipCount).limit(petLimit)
			.toArray((err, result) => {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.json({
						mongoPetArray: result,
					});
				} else {
					res.send('No more pets to be seen!');
				}
			});
	}
};
