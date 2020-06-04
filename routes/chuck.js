const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  const apiResponse = await axios.get(
    "https://api.chucknorris.io/jokes/random"
  );
  console.log(apiResponse);
  res.send(apiResponse.data.value);
});

module.exports = router;
