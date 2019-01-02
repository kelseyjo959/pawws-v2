import mongoose from 'mongoose';

const Pet = mongoose.model('Pet');

export const getPets = (req, res) => { // eslint-disable-line
	console.log('inside pets');
	let petLimit;
  let shelterName;
  let petSkipCounter;
  let skipCount;
	let mySort;
	let screenWidth;

	screenWidth = req.headers.screensize;	
	petSkipCounter = req.headers.count;
	shelterName = req.headers.shelter;

  function getPetLimit(screenWidth) {
  	if (screenWidth < 400) {
  		petLimit = 14;
  	} if (screenWidth > 401 && screenWidth < 960) {
  		petLimit = 22;
  	}
  	petLimit = 32;
	}

	petLimit = getPetLimit(screenWidth);
	skipCount = parseInt(petSkipCounter);
	mySort = { _id: -1 };

	if (shelterName === '') {
		Pet.find({}, (err, response) => {
			if (err) res.send(err);
			res.json(response);
		}).sort(mySort).skip(skipCount).limit(petLimit);
	} else if (shelterName === 'Stray Rescue of St Louis' || shelterName === 'Adopt a Senior Pet' || shelterName === 'NYC Shelter Buddy') {
		Pet.find({ shelter_name: shelterName}, (err, response) => {
			if (err) res.send(err);
			res.json(response);
		}).sort(mySort).skip(skipCount).limit(petLimit);
	}
};
