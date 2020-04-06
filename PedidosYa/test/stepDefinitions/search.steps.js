import { defineSupportCode } from 'cucumber'
import homePage from '../pageobjects/home.page';
import login from '../pageobjects/login.page';
import ExcerciseSearch from '../pageobjects/ExcerciseSearch.page';

defineSupportCode(function({ When, Then }) {

	  When(/^I enter an address "([^"]*)" and a restaurant "([^"]*)"$/, function(address,restaurant) {
      ExcerciseSearch.search(address, restaurant)
  	})

    When(/^I enter an address "([^"]*)"$/, function(address) {
      ExcerciseSearch.searchAddress(address)
    })

	  When(/^Pause$/, function() {
    	browser.pause(15000)    	
  	})

	  When(/^I choose an address option$/, function() {
      if (ExcerciseSearch.confirmAddress().value){
          ExcerciseSearch.clickAddress()
      }
  	})

	  When(/^I confirm the address location$/, function() {
      ExcerciseSearch.clickConfirmLocation()
  	})

  	When(/^I filter by restaurants that accept credit card$/, function() {
    	ExcerciseSearch.clickCreditCardFilter()
  	})

    When(/^I filter by "([^"]*)" category$/, function(category) {
      ExcerciseSearch.clickCategoryFilter(category)
    })

  	When(/^I choose a restaurant option$/, function() {
  		if (ExcerciseSearch.countRestaurants()>1){
  			let numRestaurants=ExcerciseSearch.countRestaurants()
  			ExcerciseSearch.getBestRankedRestaurant(numRestaurants)
        browser.pause(500);
  			ExcerciseSearch.clickRestaurantOption()
        if (ExcerciseSearch.confirmPopUp()>=1)
            ExcerciseSearch.clickPopUp()
  		}
  		else if (ExcerciseSearch.countRestaurants()==1){
        ExcerciseSearch.clickRestaurantOption()
        if (ExcerciseSearch.confirmPopUp()>=1)
            ExcerciseSearch.clickPopUp()
      }
  		else if (ExcerciseSearch.countRestaurants()==0)
  			console.log("There are no restaurants")
  	})

  	When(/^I search two "([^"]*)" in menu search field$/, function(order) {
    	ExcerciseSearch.setOrder(order)	
      browser.pause(1000)  	
    	ExcerciseSearch.clickOrdertOption(order)
      browser.pause(1000)
      ExcerciseSearch.clickOrdertOption(order)
      browser.pause(1000) 
  	})

  	Then(/^I verify the order appears correctly in “Mi pedido” section$/, function() {
      if (ExcerciseSearch.confirmDetailOrder().value.length>=1){
          console.log('The order appears correctly in “Mi pedido” section')
      }
      else
          console.log('The order does not appear correctly in “Mi pedido” section')
    })

    Then(/^I verify the order appears has a discount today and what percentage it is$/, function() {
      if (ExcerciseSearch.confirmDiscount().value.length>=1){
          let percentage=ExcerciseSearch.getDiscount()
          console.log('The restaurant has a discount today and it is '+ percentage )
      }
      else
        console.log('The restaurant has not a discount today')
    })

    Then(/^I verify the price of the order$/, function() {
      let finalPrice=ExcerciseSearch.getFinalPrice()

      if (ExcerciseSearch.confirmDiscount().value.length>=1){
        let beforePrice=ExcerciseSearch.getBeforePrice()
        let discountPrice=ExcerciseSearch.getDiscountPrice()
        console.log('The price of the order is: '+ finalPrice+'. It includes a discount of '+discountPrice+ ' and the before price is '+beforePrice)
      }
      else
        console.log('The price of the order is: '+ finalPrice)
    })

    Then(/^I verify all restaurants have the word "([^"]*)" in their name$/, function(restaurant) {
      let numGourmetRestaurants = ExcerciseSearch.countGourmetRestaurants(restaurant)
      let numRestaurants = ExcerciseSearch.countRestaurants()
      if (numGourmetRestaurants === numRestaurants){
        console.log('All restaurants have the word '+'"'+restaurant+'"')
      }
      else
        console.log('Not at all restaurants have the word '+'"'+restaurant+'"')
    })

    Then(/^I verify the list of restaurants returns results$/, function() {
      let numRestaurants=ExcerciseSearch.countRestaurants()
      if (numRestaurants>=1){
        ExcerciseSearch.printRestaurantInfo(numRestaurants)
      }
      else
        console.log('No restaurants found matching your search')
    })

})


