# Drax's Snacks


## About the Project
Full stack web application built with Node, Express, AJAX, Twilio API, jQuery, HTML5, CSS3 and PosgreSQL.
!["Home Page"](/public/images/home-page.png?raw=true "HomePage")

!["Order Page"](/public/images/order-page.png?raw=true "HomePage")

## Problem Statement
An application built to simplify online food ordering for pickup.

## Expected Usage
Desired users are restaurant owners and customers:

Users can go on the web application and place an order 

Restaurant owner then will be notified on the order and over text (using Twilio API)
they specify how long the order will take to prepare.
This triggers a notification to the customer with estimated preparation time via SMS.

## Getting Started
Install all dependencies (using the npm install command).

Setup the database:

Run knex migrate:latest in your terminal.
Optional: Set up dummy-data by running knex seed:run in your terminal.
To use the voice/sms features:

Install the google chrome extension, Forward : https://chrome.google.com/webstore/detail/forward-link-to-localhost/ghnicdmecgkdbledgnmbbnddfnjjgegp?hl=en
Create a tunnel to your localhost and open it.
Go to Twilio and sign up for a new account.
Get a Twilio phone number.
Create a new Twiml App in the console, and set the request URL to your tunneled address.
Create a .env file and set the variables with your Twiml info. TWILIO_ACCOUNT_SID=XXXXXXXXX TWILIO_AUTH_TOKEN=XXXXXXXX TWILIO_NUMBER=+1XXXXXXXXXX TEST_NUMBER=+1XXXXXXXXXX
Run the development web server using the 'npm start' command.

As a restaurant owner: Visit the page: http://localhost:8080/admin in your browser.

As a user: Visit the page:  http://localhost:8080 in your browser.

### Dependencies
bcrypt 1.0.2 or above
body-parser 1.17.2 or above
cookie-session 2.0.0-beta.2
cookie-parser 1.4.3 or above
dovenv 4.0.0 or above
ejs 2.5.6 or above
express 4.15.3 or above
express-basic-auth 1.1.1 orabove
node 5.10.x or above
pg 7.0.2 or above
request 2.81.0 or above
twilio 3.5.0 or above
