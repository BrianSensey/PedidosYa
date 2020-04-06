class LoginModal {

  get iFrame ()         { return browser.element('iFrame') }
  get emailField ()     { return browser.element('#email') }
  get pwdField ()       { return browser.element('#password') }
  get ingresarButton () { return browser.element('#login') }

  switchToLoginIframe () {
    this.iFrame.waitForVisible()
    let loginFrame = this.iFrame.element().value
    console.log(loginFrame)
    browser.frame(loginFrame)
  }

  switchBackFromIframe () {
    browser.frameParent()
  }

  setEmailField (email) {
    this.emailField.waitForVisible()
    this.emailField.setValue(email)
  }

  setPwdField (pwd) {
    this.pwdField.waitForVisible()
    this.pwdField.setValue(pwd)
  }

  clickIngresarButton () {
    this.ingresarButton.waitForVisible()
    this.ingresarButton.click()
  }

  login (email, pwd) {
    this.switchToLoginIframe()
    this.setEmailField(email)
    this.setPwdField(pwd)
    this.clickIngresarButton()
  }
}

export default new LoginModal()
