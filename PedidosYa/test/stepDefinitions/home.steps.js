import { defineSupportCode } from 'cucumber'
import homePage from '../pageobjects/home.page';

defineSupportCode(function({ Given }) {
  Given(/^I am on the home page$/, function() {
    homePage.open()
  })
})
