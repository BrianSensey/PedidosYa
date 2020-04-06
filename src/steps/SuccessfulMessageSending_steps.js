var SentMessagePage = require('../pages/SentMessage_page.js');

module.exports = function() {

	this.Then(/^An alert message is displayed: "([^"]*)"$/, function(alertmessage) {
        var current_message = SentMessagePage.getAlertMessageLabel();
        expect(current_message).to.include(alertmessage, `Current alert message: '${current_message}' but expected: '${alertmessage}'.`);
        
    });
};