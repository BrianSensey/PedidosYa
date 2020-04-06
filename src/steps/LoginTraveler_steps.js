var LoginTravelerPage = require('../pages/Login_TravelerPage.js');

module.exports = function() {

    this.When(/^I fill the email "([^"]*)" field$/, function(name) {
        LoginTravelerPage.setUsername(name);
    });

    this.When(/^I fill the password "([^"]*)" field$/, function(pass) {
        LoginTravelerPage.setPassword(pass);
    });

    this.When(/^I click on the Login button$/, function() {
        LoginTravelerPage.clickLoginButton();
    });

    this.Then(/^The login page should be loading$/, function() {
        LoginTravelerPage.loadingPage();
    });

    this.Then(/^I logout$/, function() {
        LoginTravelerPage.goTo("https://www.phptravels.net/account/logout");
        
    });

    this.Then(/^Login page is reloaded$/, function(){
        var isLoginButtonPresent = LoginTravelerPage.isLoginButtonPresent();
        expect(isLoginButtonPresent).to.equal(true, 'Expected to be at login page.');
    })

    this.Then(/^An error message is displayed "([^"]*)"$/, function(error) {
        var current_error = LoginTravelerPage.getErrorLabel();
        expect(current_error).to.include(error, `Current error message: '${current_error}' but expected error message: '${error}'.`);
        
    });

};