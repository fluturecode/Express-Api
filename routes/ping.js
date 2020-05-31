//In a routes/ping.js file add the following route:
const express = require("express");

const router = express.Router();

router.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = router;
