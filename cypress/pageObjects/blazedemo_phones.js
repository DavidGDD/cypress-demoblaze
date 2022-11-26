const url = 'https://www.demoblaze.com/';

const selectors = {
  phones: '[onclick="byCat(\'phone\')"]',
  phoneCardLinks: '.card > .card-block > .card-title > .hrefch',
  addCartButtom: '#tbodyid > div.row > div > a'
};

const actions = {
  visit: () => {
    cy.visit(url);
  },
  navigateToPhones: () => {
    cy.get(selectors.phones)
      .click();
  },
  selectRandomPhone: () => {
    const getRandomInt = (max) => Math.floor(Math.random() * max);

    cy.get(selectors.phoneCardLinks).as('availablePhones');

    cy.get('@availablePhones')
      .its('length')
      .then(length => {
        cy.get('@availablePhones')
          .eq(getRandomInt(length-1))
          .click()
          .url().should('include', 'prod.html?idp_=');
      })
  },
  addPhoneToCart: () => {
    cy.get(selectors.addCartButtom).click();
  }
};

export default {
  name: 'blazedemo_home',
  selectors,
  actions
};
