import { When } from "@badeball/cypress-cucumber-preprocessor";
import CreatePage from "../../e2e/pages/create.page";
import { should } from "chai";

When("User see in the header icon {string} and wraper icon", (icon: string) => {
    cy.contains(icon).should('be.visible')
    cy.get('.WrapperSvg-size17').should("be.visible");
  });

When("In the wraper icon user can select the {string}",
    (dropdown: string) => {
        cy.get('.WrapperSvg-size17').should("be.visible",dropdown)
        .click({ force: true });
});

 When(/^the (.*) User should see the field$/, function (dropdown:string, table:any) {
  CreatePage.getElementByText(dropdown)
    // cy.get('.pficon-beauty').get('.item-name').eq(0).should("exist", dropdown);
    // cy.get('.pficon-health').get('.item-name').eq(1).should("exist", dropdown);
    // cy.get('.pficon-hygiene').get('.item-name').eq(2).should("exist", dropdown);
    // cy.get('.pficon-dietetics').get('.item-name').eq(3).should("exist", dropdown);
    // cy.get('.pficon-babies').get('.item-name').eq(4).should("exist", dropdown);
    // cy.get('.pficon-opticians').get('.item-name').eq(5).should(
    //   "exist",
    //   dropdown
    // );
    // cy.get('.pficon-orthopedics').get('.item-name').eq(6).should('exist',dropdown)
    // cy.get('.pficon-herbalist').get('.item-name').eq(7).should('exist',dropdown)
    // cy.get('.pficon-natural-cosmetics').get('.item-name').eq(8).should('exist',dropdown)
    // CreatePage.firstSectionMenu().contains('Offers')
    // CreatePage.firstSectionMenu().contains('Brands')
    // CreatePage.firstSectionMenu().contains('Best sellers')
});

When("Customer should see the Neutrogena product:",
    (table: any) => {
    const fields = table.raw().map(row => {
        return row[0];
      });
      for (let i = 0; i < fields.length; i++) {
        expect(CreatePage.getElementByTag(fields[i]).should('be.visible'));
      }
    }
  );

  When(
    "Customer selects the {string} product from the Headroom",
    (product: string) => {
    CreatePage.getElementByTag(product)
       .should('exist', product)
        .click({
          altKey: true,
        });
        cy.waitUntil(() =>
      cy.url().should("include", "neutrogena/b-658"),{});
    }
  );

  When(
    "The section Categories user select the {string}",
    (category: string) => {
      cy.get('.item-name').eq(1).should("exist", category)
       .should('exist',category)
        .click({force:true});
        cy.waitUntil(() => cy.url().should("include", "health/c-2"),{
    });
    });

