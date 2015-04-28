var utils = require('../src/Utils')();

var myStepDefinitionsWrapper = function() {

  this.Given(/^I am on the main page$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I should see the menu options$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^I can click through each link$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

}

module.exports = myStepDefinitionsWrapper;
