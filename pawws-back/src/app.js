import bodyParser from 'body-parser';
import compression from 'compression'; // compresses requests
import cors from 'cors';
import express from 'express';
import expressValidator from 'express-validator';
import mongoose from 'mongoose';
import path from 'path';

// Controllers (route handlers)
import * as homeController from './controllers/home';

// Create Express server
const app = express();

// Express configuration
app.set('port', 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});


app.use(cors({ credentials: true, origin: true }));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://locslhost:27017/pawws', { useNewUrlParser: true});

export default app;
