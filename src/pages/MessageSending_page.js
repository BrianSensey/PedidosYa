'use strict';

class MessageSendingPage {

    get subjectHeadingCombo()       { return browser.element('#uniform-id_contact'); }
    get emailInput()                { return browser.element('#email'); }
    get orderInput()                { return browser.element('#id_order'); }
    get messageInput()              { return browser.element('#message'); }
    get sendButton()                { return browser.element('#submitMessage'); }
   
    clickSubjectHeadingCombo(value){
        this.subjectHeadingCombo.waitForVisible();
        this.subjectHeadingCombo.click('#id_contact').click('#id_contact option[value="'+ value +'"]');
    }

    setEmail(email){
        this.emailInput.waitForVisible();
        this.emailInput.setValue(email);
    }

    setOrder(order){
        this.orderInput.waitForVisible();
        this.orderInput.setValue(order);
    }

    setMessage(message){
        this.messageInput.waitForVisible();
        this.messageInput.setValue(message);
    }

    clickChooseFileButton(){
        browser.chooseFile('#fileUpload', './assets/example.txt');
    }

    clickSendButton(){
        this.sendButton.waitForVisible();
        this.sendButton.click();
    }

}

module.exports = new MessageSendingPage();