var LoggedTravelerInPage = require('../pages/LoggedTraveler_in_page.js');

module.exports = function() {

	this.Then(/^I should get logged$/, function(){
        var isLoginButtonPresent = LoginPage.isLoginButtonPresent();
        expect(isLoginButtonPresent).to.equal(false, 'Expected to be at login page.');
    })

    this.Then(/^Home page is displayed "([^"]*)"$/, function(message) {
    	browser.pause(2000);
    	var homepageURL = LoggedTravelerInPage.getHomepageURL();
    	expect(homepageURL).to.include(message, `Current page: '${homepageURL}' but expected page: '${message}'.`);
    });
};