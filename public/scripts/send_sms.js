// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC6fcfd1e98597d109e3cf0fa3bd99c85d';
const authToken = '6f4862ebdff859830d9ff1db6d1ed382';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16474924614',
     to: '+14168097087'
   })
  .then(message => console.log(message.sid));
