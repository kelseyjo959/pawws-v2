import app from './app';
import mongoose from 'mongoose';

const server = app.listen(app.get('port'), () => {
	console.log(` App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`); // eslint-disable-line no-console
	console.log('  Press CTRL-C to stop\n'); // eslint-disable-line no-console
	const Pet = mongoose.model('Pet');
		Pet.countDocuments().exec((err, count) => {
			if (err) {
				console.log(err); // eslint-disable-line
			}
			console.log(`this is how many Pets you have in MONGO right now: ${count}`); // eslint-disable-line
		});	
});

export default server;
