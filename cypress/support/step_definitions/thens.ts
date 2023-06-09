import { Then } from "@badeball/cypress-cucumber-preprocessor";
import CreatePage from "../../e2e/pages/create.page";


Then("I should see the title {string}", (title: string) => {
  expect(cy.get('.navbar-brand').should("be.visible", title));
});

Then("I should see the search bar {string}", (search: string) => {
    expect(CreatePage.searchBar().should("be.visible", search));
});

Then(
    "User should be see {string} and {string}",
    (saved: string, bag: string) => {
        expect(cy.get('#dropdown-loggedout').should('exist',saved))
        expect(cy.get('#user-cart').should('exist', bag))
    }
  );

  Then("User should see the text {string}", (text: string) => {
    expect(cy.contains(text).should("be.visible", text));
  });


  Then("User click the title {string}", (title: string) => {
    expect(CreatePage.getElementByTitle('Mood').should("be.visible").click({force:true}));
  });


Then("View the Mood section", (section: string) => {
  expect(cy.url().should("include", "mood/c-674"));
});

Then("The user must apply the {string} filte", (filter: string) => {
  cy.get('#select-order-by').select("alpha_asc").should('have.value', 'alpha_asc')
});


Then('User should see the following fields in the form:', (dataTable: any) => {
  const fields = dataTable.raw().flat();
  for (let i = 0; i < fields.length; i++) {
    const fieldsForm = CreatePage.getElementByTitle(fields[i]);
    cy.waitUntil(() => CreatePage.getElementByTitle(fields[i]), {
      timeout: 3000,
      interval: 500,
      errorMsg: `Error >> Could not find locale field ${fields}`,
    });
    expect(fieldsForm.should('be.visible', fields));
  }
});