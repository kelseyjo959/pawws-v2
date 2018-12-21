import RootComponent from './RootComponent';

describe('RootComponent', () => {
  it('exists so that all of the other jsx files are tested', () => {
    const rootComponent = new RootComponent();

    expect(rootComponent).to.exist;
  });
});
