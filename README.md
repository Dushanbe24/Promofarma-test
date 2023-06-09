# Overview of what was done:
Cypress project overview for PromoFarma UI Testing
In the current project, I installed Cypress.
Cypress was installed with Node.js.
Cypress accepts .js (javascript) and .ts (typescript) files.
Cypress Version 12.10.0
Windows version 11
Visual Studio Code
Node.js version 15.14.0

# Installation process
1. I created UI project: `promofarma-test`
2. I installed devDependencies:
   `npm install -D typescript cypress-wait-until cypress @cypress/browserify-preprocessor @badeball/cypress-cucumber-preprocessor`
3. Run `npm i`
3. Test check. `npx cypres open` or `npm run cy:open` for to start work with Cypress.


# About Framework
1. Added a `client` folder to the cypress/e2e/ folder. 
Also added feature files to the client folder.
I have three features.
`list_product.feature`
`search_product.feature`
`web_page.feature`


2. I created a folder with `step_definitions`.
In the "cypress/support/" folder I added the "step_definitions" folder. Inside this folder I have created the following files:
a. `givens.ts`
b. `whens.ts`
c. `thens.ts`

3. Updated scripts.
I added the dependencies and updated the scripts in the `package.json` file in the project with the following scripts.

4. I created a page folder.
In `cypress/e2e/pages/` I created a pages folder and file.
I have `create.page.ts` file.

5. I updated the `cypress.config.ts` file I created and added all the necessary and important information to make the cypress work properly. 

6. I created a file for Hide XHR requests
`cypress\support\disable-xhr-logs.js`

Notes:  make sure Cypress is installed correctly.
The Cypress file structure is used.
The tests are run on Chrome, Edge or Firefox browsers.
And all tests successfully.

# 