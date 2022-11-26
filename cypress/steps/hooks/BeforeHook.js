// This before is from mocha, that means it will be executed once and only once before all tests start, that
// means this would be the place to create everything you might need on your tests to make sure that every
// tests execution starts exactly on the same conditions and with the same dataset
// moreinfo: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks

before(function () {
  /*
  Example of getting fixture before all tests.
  This method allow you to get data with 'this' context--> this.kcLoginData
   cy.fixture(Cypress.env('environment') + '/kcLoginData.json').as('kcLoginData');
 */

  /* Register the user you are gonna login with or anything you might need for this feature
  * With:
  *   cy.fixture('user_fixture.json).then((user_json) => {
  *     // Requests are also thenable so you can use results to make more requests or store
  *     // them to be used in other stages of the test
  *     cy.request('POST', Cypress.env('BACK_URL') + Cypress.env('USER_ENDPOINT'), user_json).then((user) =>{
  *
  *       // With this user_id will be available in this.user_id in other stages, for example
  *       // to be used in the after request to delete this user ;)
  *       cy.wrap(user.body.id).as('user_id')
  *
  *       // Or maybe we have another object to create that needs that id, for instance
  *       cy.fixture('some_fixture.json).then((other_json) => {
  *         other_json.user_id = user.body.id
  *         cy.request('POST', Cypress.env('BACK_URL') + Cypress.env('USER_ENDPOINT'), other_json);
  *       });
  *     });
  *   });
  * Or:
  *   // This task would be defined in plugins/index and should handle the creation/deletion of objects in database
  *   cy.task('setup_Login', pageName);
  */
});
