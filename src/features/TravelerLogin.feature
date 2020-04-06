Feature: Login Action

	Description: This feature will test a Login functionality
	Scenario: I log with valid credentials and home page is displayed successfully
		Given I have at least one user-created and I'm in a Login section "https://www.phptravels.net/login"
		When I fill the email "brian6@oktana.io" field
		When I fill the password "jejejeje" field
		When I click on the Login button
		Then The login page should be loading
		Then Home page is displayed "https://www.phptravels.net/account/"
		Then I logout

	Scenario:  I log with an invalid username and Login page is reloaded with an  error message
		Given I have at least one user-created and I'm in a Login section "https://www.phptravels.net/login"
		When I fill the email "wrongEmail" field 
		When I fill the password "jejejeje" field
		When I click on the Login button
		Then An error message is displayed "Invalid Email or Password"

	Scenario:  I log with an invalid password and Login page is reloaded with an  error message
		Given I have at least one user-created and I'm in a Login section "https://www.phptravels.net/login"
		When I fill the email "brian6@oktana.io" field 
		When I fill the password "wrongPass" field
		When I click on the Login button
		Then An error message is displayed "Invalid Email or Password"