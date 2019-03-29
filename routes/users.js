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

  router.post("/order", (req, res) => {
    knex("orders")
      .insert({name: req.body.name, phone: req.body.phone})
      .then((results) => {
        res.redirect("/checkout");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
}
//
