const url = 'https://www.demoblaze.com/';

const selectors = {
  'Home': ':nth-child(1) > .nav-link',
  'Contact': ':nth-child(2) > .nav-link',
  'About us': ':nth-child(3) > .nav-link',
  'Cart': '#cartur',
  'Log in': '#login2',
  'Sign up': '#signin2'
};

const actions = {
  visit: () => {
    cy.visit(url);
  },
  checkTopNavigationElements: () => {
    Object.keys(selectors).forEach(item => {
      const component = cy.get(selectors[item]);

      component.should('be.visible');
      component.should('include.text', item);
    });
  },
};

export default {
  name: 'blazedemo_home',
  selectors,
  actions,
};
