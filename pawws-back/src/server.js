import app from './app';

const server = app.listen(app.get('port'), () => {
	console.log(` App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`); // eslint-disable-line no-console
	console.log('  Press CTRL-C to stop\n'); // eslint-disable-line no-console
});

export default server;
