var UtilsPage = require('../pages/utils_page.js');

module.exports = function() {

	this.When(/^I pause for (\d+)ms$/, function(intMs){
	    browser.pause(intMs);
	});

	this.Given(/^I open the url "([^"]*)"$/, function(site) {
		UtilsPage.goTo(site);
	});

	this.Given(/^I have at least one user-created and I'm in a Login section "([^"]*)"$/, function(site) {
		UtilsPage.goTo(site);
	});

	this.Given(/^I'm on the contact page: "([^"]*)"$/, function(site) {
		UtilsPage.goTo(site);
	});
};