import { expect } from 'chakram';

export default {
    statusIs(expectedStatus, response) {
        try {
            return expect(response).to.have.status(expectedStatus);
        } catch (e) {
            console.log(JSON.stringify(response, null, 2)); // eslint-disable-line no-console
            throw e;
        }
    },
    schemaIs(expectedSchema, response) {
        try {
            return expect(response).to.have.schema(expectedSchema);
        } catch (e) {
            console.log(JSON.stringify(response, null, 2)); // eslint-disable-line no-console
            throw e;
        }
    },
};
