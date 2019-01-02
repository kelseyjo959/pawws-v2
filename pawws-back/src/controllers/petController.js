import mongoose from 'mongoose';

const Pet = mongoose.model('Pet');


export const getThings = (req, res) => {
	console.log("hey hey");
	console.log(req.headers);
	return res.send('<p>some html</p>');
};

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

	console.log(screenWidth);
	console.log(petSkipCounter);
  
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
			console.log(response);
			const newResponse = ["hey", "here", "things"];
			return res.json(newResponse);
		});
	// 	Pet.find({}).sort(mySort).skip(skipCount).limit(petLimit)
	// 		.toArray((err, result) => {
	// 			if (err) {
	// 				return res.send(err);
	// 			} else if (result.length) {
	// 				return res.json({
	// 					mongoPetArray: result,
	// 				});
	// 			} else {
	// 				return res.send('No more pets to be seen!');
	// 			}
	// 		});
	// } else if (shelterName === 'Stray Rescue of St Louis' || shelterName === 'Adopt a Senior Pet' || shelterName === 'NYC Shelter Buddy') {
	// 	Pet.find({ shelter_name: shelterName }).sort(mySort).skip(skipCount).limit(petLimit)
	// 		.toArray((err, result) => {
	// 			if (err) {
	// 				return res.send(err);
	// 			} else if (result.length) {
	// 				return res.json({
	// 					mongoPetArray: result,
	// 				});
	// 			} else {
	// 				return res.send('No more pets to be seen!');
	// 			}
	// 		});
	}
};
