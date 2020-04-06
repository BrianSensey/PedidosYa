import Page from './page'

class HomePage extends Page {

  get logo ()           { return browser.element('.logo') }
  get ingresarLink ()   { return browser.element('#lnkLogin') }
  get userNameLink ()   { return browser.element('#lnkUserName > div.left.top-link') }
  get ciudadDropdown () { return browser.element('#selectCity') }
  get addressField ()   { return browser.element('#address') }
  get buscarButton ()   { return browser.element('#search') }

  open () {
    super.open('/')
    this.logo.waitForVisible()
  }

  clickIngresarLink () {
    this.ingresarLink.waitForVisible()
    this.ingresarLink.click()
  }

  clickBuscarButton () {
    this.buscarButton.waitForVisible()
    this.buscarButton.click()
  }

  getUserNameLink () {
    this.userNameLink.waitForVisible()
    return this.userNameLink.getText()
  }

}

export default new HomePage()
