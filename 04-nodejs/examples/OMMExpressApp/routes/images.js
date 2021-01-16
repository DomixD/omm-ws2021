var imageDatabase = require('../imagedatabase.json');
var express = require('express');
var router = express.Router();


/* GET images listing. */
router.get('/', function(req, res, next) {
  res.json( {"images": imageDatabase})
});

module.exports = router;
