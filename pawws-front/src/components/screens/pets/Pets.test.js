import Pets from './Pets';
import axios from 'axios';

describe('Pets', ()=> {
  let testObject;
  beforeEach(() => {
    testObject = new Pets({});
    sinon.stub(testObject, 'setState');
    // sinon.stub(axios, 'get').returns(Promise.resolve({}));
  });

  afterEach(() => {
    testObject.setState.restore();
    // axios.get.restore();
  });

  describe('Constructor', () => {
    it('should test the constructor setup', () => {
      const initialState = {
        responseArray: [],
      };

      expect(testObject).to.exist;
      expect(testObject.state).to.eql(initialState);
    });
  });

  describe('handleChange', () => {
    it('should update the state with the axios response object', (done) => {
      const res = {
				data: 
          [
            {name: "floppy"}, 
            {name: "soppy"},
          ],
      };
      sinon.stub(axios, 'get').returns(Promise.resolve(res));
      testObject.state = {
        responseArray: [],
      };

      testObject.handleChange().then( () => {
        expect(testObject.setState).to.have.been.calledWith({ responseArray: res.data });
        done();
      });

    });
  });

});