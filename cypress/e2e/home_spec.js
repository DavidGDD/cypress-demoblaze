import home from '../pageObjects/blazedemo_home';

describe('Home', function () {
  it('should show a complete top-navigation menu', function () {
    home.actions.visit();
    home.actions.checkTopNavigationElements();
  })
})
