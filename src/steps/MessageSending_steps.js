var MessageSendingPage = require('../pages/MessageSending_page.js');

module.exports = function() {

    this.When(/^I select an option on the Subject Heading combobox$/, function() {
        
        function getRandomInt() {
            return Math.floor(Math.random() * 2) + 1;
        }
        var value=getRandomInt();
        MessageSendingPage.clickSubjectHeadingCombo(value);
    });

    this.When(/^I attach a file in the local disk$/, function(file) {
            MessageSendingPage.clickChooseFileButton();
    });

    this.When(/^I select an option "([^"]*)" on the Subject Heading combobox$/, function(subjectheading) {
        var value;
        if (subjectheading==='Customer service'){
            value=2;
        }
        else if (subjectheading==='Webmaster'){
            value=1;
        }
        else {
            value=0;
        }
        MessageSendingPage.clickSubjectHeadingCombo(value);
    });

    this.When(/^I fill the contact email "([^"]*)" field$/, function(email) {
        MessageSendingPage.setEmail(email);
    });

    this.When(/^I fill the contact order "([^"]*)" field$/, function(order) {
        MessageSendingPage.setOrder(order);
    });

    this.When(/^I attach "([^"]*)" a file in my local disk$/, function(file) {
            MessageSendingPage.clickChooseFileButton();
    });

    this.When(/^I fill the message "([^"]*)" field$/, function(message) {
        MessageSendingPage.setMessage(message);
    });

    this.When(/^I click on the Send button$/, function() {
        MessageSendingPage.clickSendButton();
    });

};