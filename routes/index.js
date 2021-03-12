var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  console.log(req)
  res.send('POST request to the homepage')
})

module.exports = router;
