"use strict";

const express = require('express');
const router  = express.Router();

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

  // router.post("/confirmed", (req,res) => {
  //   knex.raw('INSERT INTO orders (created_at) values (CURRENT_TIMESTAMP) RETURNING id')
  //   .then((results) => {
  //     console.log(results.rows)
  //     res.redirect("/confirmed")
  //   });
  // });



  // saves a user to db...
  router.post("/register", (req, res) => {
    knex("users")
      .insert({name: req.body.name, phone: req.body.phone})
      .then((results) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return router;
}
//
