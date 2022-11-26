const url = 'https://www.demoblaze.com/cart.html';

const selectors = {
  itemsTable: '#tbodyid > tr',
  firstItemDelete: '#tbodyid > tr:nth-child(1) > td:nth-child(4) > a',
  placeOrder: '#page-wrapper > div > div.col-lg-1 > button',
  placeOrderName: '#name',
  placeOrderCountry: '#country',
  placeOrderCity: '#city',
  placeOrderCreditCard: '#card',
  placeOrderMonth: '#month',
  placeOrderYear: '#year',
  purchaseButton: '[onclick="purchaseOrder()"]',
  alertMessage: 'body > div.sweet-alert.showSweetAlert.visible > h2'
};

const actions = {
  visit: () => {
    cy.visit(url);
  },
  deleteFirstItem: () => {
    cy.get(selectors.firstItemDelete).click();
  },
  checkOneItemInCart: () => {
    cy.get(selectors.itemsTable).should('have.length', 1);
  },
  checkNoItemsInCart: () => {
    cy.get(selectors.itemsTable).should('have.length', 0);
  },
  fillPlaceOrder: () => {
    cy.get(selectors.placeOrder).click();
    cy.get(selectors.placeOrderName).type('Name');
    cy.get(selectors.placeOrderCountry).type('Country');
    cy.get(selectors.placeOrderCreditCard).type('CreditCard');
    cy.get(selectors.placeOrderMonth).type('Month');
    cy.get(selectors.placeOrderYear).type('Year');
  },
  purchase: () => {
    cy.get(selectors.purchaseButton).click();
    cy.get(selectors.alertMessage).should('be.visible');
  }
};

export default {
  name: 'blazedemo_cart',
  selectors,
  actions,
};
