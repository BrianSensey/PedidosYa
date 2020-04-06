class ExcerciseSearch {
    
    get addressField()              {   return browser.element("[name='address']"); }
    get restaurantField()           {   return browser.element("[name='optional']"); }
    get orderField()                {   return browser.element('#menuSearch'); }
    get searchButton()              {   return browser.element('#search'); }
    get addressButton()             {   return browser.element('#customCtrl_copy'); }
    get popupYesButton()            {   return $("div[class='tmask'] a[id='lnkConfirmPop']"); }
    get confirmLocationButton()     {   return browser.element('#confirm'); }
    get restaurantOption()          {   return browser.element('.restaurant-wrapper.peyaCard.show '); }
    get popup()                     {   return browser.element('.tbox'); }
    get rankingValues()             {   return browser.getText('.rating-points.box_split_review_04');}
    get creditcardFilter()          {   return browser.element("[data-key='online_payment']"); }

    clickPopUp () {
        this.popup.waitForVisible()
        this.popup.click()
        this.popupYesButton.waitForVisible()
        this.popupYesButton.click()
    }

    clickOrdertOption(order){
        var menuChosen= $('mark*='+order)
        menuChosen.waitForVisible()
        menuChosen.click()
    }

    setAddressField (address) {
        this.addressField.waitForVisible()
        this.addressField.setValue(address)
    }

    setRestaurantField (restaurant) {
        this.restaurantField.waitForVisible()
        this.restaurantField.setValue(restaurant)
    }

    clickSearchButton(){
        this.searchButton.waitForVisible();
        this.searchButton.click();
    }

    clickCreditCardFilter(){
        this.creditcardFilter.waitForVisible();
        this.creditcardFilter.click();
    }

    clickCategoryFilter(category){
        var categoryFilter = $('span='+category)
        categoryFilter.waitForVisible()
        categoryFilter.click()
    }

    clickAddress(){
        this.addressButton.waitForVisible();
        this.addressButton.click();
    }

    clickConfirmLocation(){
        this.confirmLocationButton.waitForVisible();
        this.confirmLocationButton.click();
    }

    clickRestaurantOption(){
        this.restaurantOption.waitForVisible();
        this.restaurantOption.click();
    }

    getRestaurantRanking(){
         return $("li[class='restaurant-wrapper peyaCard show '] section[class='restaurantData']:nth-child(2) div:nth-child(2) span:first-child i:first-child").getText();
    }

    getRestaurantName(){
         return $("a[class='arrivalName']").getText();
    }

    getBeforePrice(){
        return $("section[id='subtotal'] div:nth-child(2)").getText();
    }

    getDiscountPrice(){
        return $("section[id='discountLine'] div:nth-child(2)").getText();
    }

    getFinalPrice(){
        return $("section[class='prefooterinfo total totalContent'] div:nth-child(2)").getText();
    }

    getDiscount(){
        return $("section[id='discountLine'] div:first-child").getText();
    }

    confirmPopUp(){
        return browser.elements('.tbox').value.length;
    }

    confirmDiscount(){
        return browser.elements('#discountLine');
    }

    confirmDetailOrder(){
        return browser.elements('#scrollContainer');
    }

    confirmAddress(){
        return browser.elements('.listAddress');
    }

    countGourmetRestaurants(restaurant){
        return browser.elements("a.arrivalName*="+restaurant).value.length;
        browser.pause(1000);
    }

    countRestaurants(){
        return browser.elements('.restaurant-wrapper.peyaCard.show').value.length;
        browser.pause(1000);
    }

    countOrderOption(){
        return browser.elements('.restaurant-wrapper.peyaCard.show').value.length;
    }

    getBestRankedRestaurant(num){
        var arrayRankings=[];

        for (let i = 0; i < num; i++) {
            arrayRankings[i]=(parseFloat(this.rankingValues));
        }
        var max_of_array = Math.max.apply(Math, arrayRankings);
        browser.element('i*='+max_of_array.toString());

    }

    printRestaurantInfo(numRestaurants){
        var listRestaurantName = $$("a[class='arrivalName']").map((result) => {
            return result.getText();
        });
        var listStatusRestaurant = $$("section[class='restaurantData'] header:first-child label:nth-child(2)").map((result) => {
            return result.getText();
        });
        var listRestaurantRating = $$("i[class*='rating-points box_split_review_0']").map((result) => {
            return result.getText();
        });
        var listRestaurantAddress = $$("span[class='address']").map((result) => {
            return result.getText();
        });
        var listTimeDelivery = $$("i[class='delTime']").map((result) => {
            return result.getText();
        });
        var listTypeDelivery = $$("div[class='shipping'] i:first-child").map((result) => {
            return result.getText();
        });
        
        for(var i = 0; i < numRestaurants; i++) {
            if (listStatusRestaurant[i]==='Cerrado por hoy')
                listStatusRestaurant[i]='No'
            else
                listStatusRestaurant[i]='Yes'

            if (listTypeDelivery[i]==='Gratis')
                listTypeDelivery[i]='Yes'
            else
                listTypeDelivery[i]='No - '+listTypeDelivery[i]

            console.log('Restaurant name: '+listRestaurantName[i]+'\n'+
                        'Is it opened: '+listStatusRestaurant[i]+'\n'+
                        'Restaurant rating: '+listRestaurantRating[i]+'\n'+
                        'Restaurant address: '+listRestaurantAddress[i]+'\n'+
                        'Time of delivery: '+listTimeDelivery[i]+'\n'+
                        'Is delivery free: '+listTypeDelivery[i]+'\n'
                        );
        }
    }

    setOrder(order){
        this.orderField.setValue(order);
    }

    search(address,restaurant){
        this.setAddressField(address)
        this.setRestaurantField(restaurant)
        this.clickSearchButton()
    } 

    searchAddress(address){
        this.setAddressField(address)
        this.clickSearchButton()
    } 

}

export default new ExcerciseSearch()