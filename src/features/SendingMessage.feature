Feature: Send a contact message

	Description: This feature will send a message to the company
	Scenario: I send a message successfully
		Given I'm on the contact page: "http://automationpractice.com/index.php?controller=contact"
		When I select an option on the Subject Heading combobox
		And I fill the contact email "brduca07@gmail.com" field
		And I fill the contact order "AS-9767" field
		And I attach a file in the local disk
		And I fill the message "sample" field
		And I click on the Send button
		Then An alert message is displayed: "Your message has been successfully sent to our team."

	Scenario Outline: Try to send a message with some unfilled fields 
		Given I'm on the contact page: "http://automationpractice.com/index.php?controller=contact"
		When I select an option "<subjectheading>" on the Subject Heading combobox
		And I fill the contact email "<email>" field
		And I fill the contact order "<order>" field
		And I attach "<file>" a file in my local disk
		And I fill the message "<message>" field
		And I click on the Send button
		Then An alert message is displayed: "<alertmessage>"

		Examples:
		|subjectheading 	|email 	 			|order 	  |file		|message |alertmessage 									 			|
		|Customer service	|brduca07@gmail.com |		  |valid	|sample  |Your message has been successfully sent to our team.      |
		|Webmaster      	|brduca07@gmail.com |		  |valid	|sample  |Your message has been successfully sent to our team.      |
		|Customer service	|brduca07@gmail.com |AS-9767  |     	|sample  |Your message has been successfully sent to our team.      |
		|Webmaster      	|brduca07@gmail.com |AS-9767  |     	|sample  |Your message has been successfully sent to our team.      |
		| 					|brduca07@gmail.com |AS-9767  |valid 	|sample  |Please select a subject from the list provided.			|
		|Customer service	|brduca07gmail.com  |AS-9767  |valid	|sample  |Invalid email address                          			|
		|Webmaster			|brduca07gmail.com  |AS-9767  |valid	|sample  |Invalid email address                          			|
		|Customer service	|brduca07@gmail  	|AS-9767  |valid	|sample  |Invalid email address                          			|
		|Webmaster			|brduca07@gmail  	|AS-9767  |valid 	|sample  |Invalid email address                          			|
		|Customer service	|brduca07@gmail.com	|AS-9767  |valid	|		 |The message cannot be blank                    			|
		|Webmaster			|brduca07@gmail.com	|AS-9767  |valid	|		 |The message cannot be blank                    			|