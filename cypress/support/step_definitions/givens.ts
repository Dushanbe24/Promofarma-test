import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I navigate to the Web Page$/, function () {
  cy.visit("/en",  {failOnStatusCode: false});
});

Given("I click the cookiy button", function () {
  cy.wait(100);
  cy.get('#onetrust-accept-btn-handler').click();
});
  