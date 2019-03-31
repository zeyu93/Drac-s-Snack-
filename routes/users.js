"use strict";
const accountSid = 'ACb821873d0587d85c246d76ace12fadfa';
const authToken = '95275827719a1f480ac9ad58e6425fbe';

const express = require('express');
const router  = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');
const client = require('twilio')(accountSid, authToken);

module.exports = (knex) => {

  // example...
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("items")
      .then((results) => {
        res.json(results);
    });
  });

  // router.get("/checkout", (req,res) => {
  //   knex("orders_items")
  //   .join("items","orders_items.item_id", '=', 'items.id')
  //   .select("*")
  //   // .from("orders_items")
  //   .then((results) => {
  //     console.log(results)
  //     res.json(results);
  //   });
  // });

  router.post("/order", (req,res) => {
    knex.raw('INSERT INTO orders (created_at) values (CURRENT_TIMESTAMP) RETURNING id')
    .then((results) => {
      console.log(results.rows)
      res.redirect("/checkout")
    });
  });


  // ('INSERT INTO orders_items (item_id, item_quantity, created_at) values (CURRENT_TIMESTAMP) RETURNING id')
  function send_sms(params){
    client.messages
    .create({
      body: 'You just received an order from a customer!',
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

  router.post("/checkout", (req,res) => {
    console.log("body of request: ", req.body)
    knex("users")
    .insert({name: req.body.name, phone: req.body.phone_no})
    .then((results) => {
      let templateVars = {name: req.body.name, phone: req.body.phone_no};
      console.log(templateVars)
      send_sms(req.body.phone_no)
      res.redirect("/confirmed")
    });
  });




  // saves a user to db...
  // router.post("/register", (req, res) => {
  //   knex("users")
  //     .insert({name: req.body.name, phone: req.body.phone})
  //     .then((results) => {
  //       res.redirect("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  return router;
}
//
