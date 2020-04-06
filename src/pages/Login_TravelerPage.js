'use strict';

class LoginTravelerPage {
    
    get usernameInput()  { return browser.element("[name='username']"); }
    get passwordInput()  { return browser.element("[name='password']"); }
    get loginButton()    { return browser.element("[type='submit']"); }
    get errorLabel()     { return browser.element('.alert-danger'); }

    goTo(site){
      browser.url(site);
    }
    
    setUsername(username){
        this.usernameInput.waitForVisible();
        this.usernameInput.setValue(username);
    }

    setPassword(username){
        this.passwordInput.waitForVisible();
        this.passwordInput.setValue(username);
    }

    clickLoginButton(){
        this.loginButton.waitForVisible();
        this.loginButton.click();
    }

    loadingPage(){
        this.loginButton.waitForVisible();
    }

    getErrorLabel(){
        this.errorLabel.waitForVisible();
        return this.errorLabel.getText().trim().replace(/\r?\n|\r/,"");
    }

    isLoginButtonPresent(){
        return this.loginButton.isVisible();
    }

}

module.exports = new LoginTravelerPage();