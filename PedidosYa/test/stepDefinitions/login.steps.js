import { defineSupportCode } from 'cucumber'
import homePage from '../pageobjects/home.page';
import login from '../pageobjects/login.page';
import ExcerciseSearch from '../pageobjects/ExcerciseSearch.page';


defineSupportCode(function({ When, Then }) {
  When(/^I login with email and password$/, function(table) {
    const hashes = table.hashes()
    let email = hashes[0]['email']
    let pwd = hashes[0]['password']

    homePage.clickIngresarLink()
    login.login(email, pwd)
    login.switchBackFromIframe()
  })

  Then(/^I appear logged in as "([^"]*)"$/, function (name) {
    expect(homePage.getUserNameLink()).to.be.equal(name)
  })

  

})
