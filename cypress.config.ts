import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );
  return config;
}

export default defineConfig({
  pageLoadTimeout: 15000,
  defaultCommandTimeout: 15000,
  viewportWidth: 1360,
  viewportHeight: 790,
  e2e: {
    baseUrl: "https://www.promofarma.com/",
    specPattern: "cypress/e2e/*/*.{feature,features}",
    supportFile: "cypress/support/commands.ts",
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 15000,
    chromeWebSecurity: true,
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    trashAssetsBeforeRuns: true,
    watchForFileChanges: true,
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,
    numTestsKeptInMemory: 50,
    env: {
      TAGS: "not @ignore",
      hideXHR: true,
      parseSpecialCharSequences: false,
      release: true,
      force: false,
      log: true,
      delay: 10,
      sameSite: undefined,
      httpOnly: false,
      altKey: false,
      metaKey: false,
      shiftKey: false,
    },
    animationDistanceThreshold: 5,
    waitForAnimations: true,
    projectId: "szcww9",
    setupNodeEvents,
  },
});