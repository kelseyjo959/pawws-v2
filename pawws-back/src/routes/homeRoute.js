import * as homeController from '../controllers/home';

export default (app) => {
	app.route('/')
		.get(homeController.index);
};
