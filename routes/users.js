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
      .insert({name: req.body.name, phone: req.body.phone});
  });

  return router;
}
//
