// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

// Twilio Credentials
require('dotenv').config();

//Zeyu's Credentials
// const accountSid = 'AC6fcfd1e98597d109e3cf0fa3bd99c85d';
// const authToken = '6f4862ebdff859830d9ff1db6d1ed382';

// Esther's Credentials
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.get('/confirmed', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
}); 

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});


//when the order is submitted the restaurant phone 
// receives it via sms
client.messages
  .create({
     body: 'Your order has been received, we are working hard to process your order!',
    //  Esther's number
      from: '+14388069885',
      to: '+15146220593'
     // Zeyu's number
    //  from: '+16474924614',
    //  to: '+14168097087'
   })
  .then(message => console.log(message.sid))
  .catch(err => {
    console.log(err);
  })

  //to send a msg back we need a backend admin page


  // fills out a form to indicate how long 
  // the order will take to fill
  //two fields: 
  //customer phone number
  //description: duraton of time
  //update a database "the order has been placed" 