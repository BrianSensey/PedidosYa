'use strict';

class SentMessagePage {

    get alertMessageLabel()     {   
    								if (browser.element('.alert.alert-success').type)
    									return browser.element('.alert.alert-danger');
    							    else 
    							   		return browser.element('.alert.alert-success');
								}

    getAlertMessageLabel(){
        return this.alertMessageLabel.getText().trim().replace(/\r?\n|\r/,"");
    }

}

module.exports = new SentMessagePage();