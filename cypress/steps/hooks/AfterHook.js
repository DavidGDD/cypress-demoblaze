// This after is from mocha, that means it will be executed once and only once after all tests have finished(succesfully or not), that
// means this would be the place to delete everything you did on your tests or in your before hook and leave the environment as it was
// so the next tests execution starts on the same state as the previous one
// moreinfo: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks

after(function () {
  /* Delete everything that might have been created specifically for this feature
  * With:
  *   cy.fixture('some_fixture.json).then((json) => {
  *     // Refer to the Before comment to understand why this.user_id could have a value
  *     cy.request('DELETE', Cypress.env('BACK_URL') + Cypress.env('SOME_ENDPOINT') + `/${this.user_id}`);
  *   });
  * Or:
  *   // This task would be defined in plugins/index and should handle the creation/deletion of objects in databse
  *   cy.task('cleanup_Login', pageName);
  */
});
