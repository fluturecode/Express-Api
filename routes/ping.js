//In a routes/ping.js file add the following route:
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("pong");
});

module.exports = router;
