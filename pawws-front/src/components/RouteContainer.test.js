import {
  RouteContainer,
} from './RouteContainer';

describe('RouteContainer', () => {
  describe('shouldComponentUpdate', () => {
    let routeContainer;
    let currentPage;

    beforeEach(() => {
      routeContainer = new RouteContainer();

      currentPage = '/test';
      routeContainer.props = { location: { pathname: currentPage } };
    });

    it('returns false if pathname is same', () => {
      const result = routeContainer.shouldComponentUpdate({ location: { pathname: currentPage } });

      expect(result).to.eql(false);
    });

    it('returns true if pathname is not same', () => {
      const result = routeContainer.shouldComponentUpdate({ location: { pathname: null } });

      expect(result).to.eql(true);
    });
  });
});

