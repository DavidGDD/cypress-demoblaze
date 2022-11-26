const url = 'https://www.demoblaze.com/';

const selectors = {
  laptop: '[onclick="byCat(\'notebook\')"]',
  laptopCard: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',
  addCartButtom: '#tbodyid > div.row > div > a'
};

const actions = {
  visit: () => {
    cy.visit(url);
  },
  navigateToLaptop: () => {
    cy.get(selectors.laptop).click();
  },
  selectFirstLaptopToCart: () => {
    cy.get(selectors.laptopCard).click();
    cy.url().should('include', 'prod.html?idp_=');
    cy.get(selectors.addCartButtom).click();
  }
};

export default {
  name: 'blazedemo_home',
  selectors,
  actions,
};
