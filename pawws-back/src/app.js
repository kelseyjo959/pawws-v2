import bodyParser from 'body-parser';
import compression from 'compression'; // compresses requests
import cors from 'cors';
import express from 'express';
import expressValidator from 'express-validator';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';

// Controllers (route handlers)
import homeRoute from './routes/homeRoute';
import petRoute from './routes/petRoute';
import Pet from './models/pet';  // eslint-disable-line
import Shelter from './models/shelter'; // eslint-disable-line

// Create Express server
const app = express();

// Express configuration
app.set('port', 3000);
app.set('mongo', 'localhost');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(morgan('dev'));

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

homeRoute(app);
petRoute(app);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pawws', { useNewUrlParser: true });

export default app;
