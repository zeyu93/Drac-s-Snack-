"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const http        = require('http');
const twilio      = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const accountSid = 'ACb821873d0587d85c246d76ace12fadfa';
const authToken = '95275827719a1f480ac9ad58e6425fbe';
const client = require('twilio')(accountSid, authToken);

const cookieSession = require('cookie-session')

// app.use(cookieSession({
//   name: 'session',
//   keys: [''],
//     // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))



const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  
  res.render("home");

});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/register", (req, res) => {
  res.render("register");
});


app.get("/order", (req, res) => {
  res.render("order");
});

// app.post("/order", (req, res) => {
//   res.redirect("/checkout");
// });

app.get("/checkout", (req, res) => {
  res.render("checkout");
});


app.get("/confirmed", (req, res) => {
  res.render("confirmed");
});
// app.get("/test", (req,rest) => {
//   knex
//   .select("*")
//   .from("orders_tables")
//   .then((results) => {
//     res.json(results);
//   });
// })
///

//TWILIO
// app.post('/sms', function(req, res) {
//   var twilio = require('twilio');
//   var twiml = new twilio.TwimlResponse();
//   twiml.message('The Robots are coming! Head for the hills!');
//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

function send_sms(params){
  console.log("this is to send order to restaurant phone")
  client.messages
  .create({
    body: 'Your order will be ready in!',
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
}

app.get("/admin", (req,res)=>{
  res.render("admin")
})

app.post("/admin", (req,res) => {
    let templateVars = {duration: req.body.duration, phone: req.body.tel};
    console.log(templateVars)
    send_sms(req.body.tel)
    res.render("admin")
  });



http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


