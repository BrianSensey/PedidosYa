'use strict';

class LoggedTravelerInPage {

	get loggedInLabel() { return browser.element('.flash.success'); }
	get homepageURL()   { return browser.getUrl(); }

    getLoggedInLabel(){
        return this.loggedInLabel.getText().trim().replace(/\r?\n|\r/,"");
    }

    getHomepageURL(){
        return this.homepageURL;
    }

}

module.exports = new LoggedTravelerInPage();