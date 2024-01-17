const express = require("express");
const router = express.Router();
const config = require("../config/data/config.json");
const getUrlPrefix = config.app.prefix;
console.log("getUrlPrefix: ", getUrlPrefix);


router.get(getUrlPrefix + "/ping", (req, res) => {
    res.status(200).send("pong");
  });
  


  
module.exports = router