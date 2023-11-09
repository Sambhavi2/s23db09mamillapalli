var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('icecream', { title: 'Search Results Ice-Cream' });
});

module.exports = router;