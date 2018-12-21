import chakram, { expect } from 'chakram';

describe('Chakram', () => {
    it('should provide HTTP specific assertions', () => {
        const response = chakram.get('http://google.com');
        return expect(response).to.have.status(200);
    });
});
