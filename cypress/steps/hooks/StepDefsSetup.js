import { Before } from 'cypress-cucumber-preprocessor/steps';

// This before hook is from cucumber(as sugested by the import) and will be executed right before every scenario(before the background step
// also) but after any before/before_each from mocha, this kind of hooks can, and in most cases should, have tags associated and execute
// only Before the scenarios or features that have that tag.
// This particular before needs to be executed always(with no tag) because it sets the baseStepDefs for all tests,
// SO DON'T TOUCH THIS BEFORE HOOK
Before(() => {
  cy.window().then(win => {
    win.sessionStorage.clear();
  });
});
