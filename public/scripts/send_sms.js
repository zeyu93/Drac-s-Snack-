// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

// Twilio Credentials

//Zeyu's Credentials
// const accountSid = 'AC6fcfd1e98597d109e3cf0fa3bd99c85d';
// const authToken = '6f4862ebdff859830d9ff1db6d1ed382';

// Esther's Credentials
const accountSid = 'ACb821873d0587d85c246d76ace12fadfa';
const authToken = '95275827719a1f480ac9ad58e6425fbe';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
}); 

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});


client.messages
  .create({
     body: 'Your order has been received, we are working hard to process your order!',
     from: '+16474924614',
     to: '+14168097087'
   })
  .then(message => console.log(message.sid));
