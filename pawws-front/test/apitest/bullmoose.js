import chakram from 'chakram';
import e from './helpers/expectation';

describe('Base Site', () => {
    it('gives empty content for bad address', () => {
        const response = chakram.get('https://www.bullmoosetube.com');
        return e.statusIs(200, response);
    });
});
