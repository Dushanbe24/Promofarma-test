/// <reference types="cypress" />
import JQuery = Cypress.ChainableMethods;

class CreatePage {
getElementByTag(tag: string) {
    return cy.get(`[alt="${tag}"]`);
  }


getElementByData(tag:string){
    return cy.get(`[data-qa-ta="${tag}"]`);  
  }

getElementByTitle(tag:string){
    return cy.get(`[title="${tag}"]`);  
  }

getElementByText(tag:string){
  return cy.get(`[data-text="${tag}"]`); 
}  

firstSectionMenu(){
  return cy.get('[data-qa-ta="firstSectionMenu"]');
}

searchBar(){
  return cy.get('#search-bar-input');
}

wraperItem(){
  return cy.get('.WrapperSvg-size17');
}

setPriconField(field:string){
 cy.get(`.pficon-${field}`)
  
}

setSelectFieldOption(option: string) {
  const optionElement = cy.waitUntil(() => cy.get('.item-name').contains(option), {
    errorMsg: `ERROR >> Could not find option: ${option}`,
    timeout: 5000,
    verbose: false,
    interval: 500,
  });
  optionElement.as('optionElement').click({ force: true });
}

  title() {
    return cy.title();
  }

}

export default new CreatePage();
