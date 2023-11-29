const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalOriginDependencies: true
  },
});


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {

//     },
  //  specPattern: 'cypress/integration/*/*.js'
  //  ,experimentalOriginDependencies: true
//   }
// //  , // "retries":{
    //   "runMode":1,
    //   "openMode":2
    // }
// });
