import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { JSDOM } from 'jsdom';
import sinonChai from 'sinon-chai';

process.env.NODE_ENV = 'test';

chai.use(chaiAsPromised);
chai.use(sinonChai);

global.sinon = sinon;
global.expect = expect;
global.ClientJS = class ClientJS {};
global.requestAnimationFrame = (callback) => setTimeout(callback, 0)

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
Object.keys(dom.window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
    platform: '',
};

const noop = () => null;

require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;
