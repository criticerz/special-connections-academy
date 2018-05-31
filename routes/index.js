var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { page: 'home', title: 'Special Connections Academy' });
});

router.get('/about-us', function(req, res, next) {
  res.render('pages/about-us', { page: 'about-us', title: 'About Us' });
});

router.get('/program-information', function(req, res, next) {
  res.render('pages/program-information', { page: 'program-information', title: 'Program Information' });
});

module.exports = router;
