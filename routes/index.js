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
  res.render('pages/program-information', { page: 'program-information', title: 'Program Informaton' });
});

router.get('/admissions', function(req, res, next) {
  res.render('pages/admissions', { page: 'admissions', title: 'Admissions' });
});

router.get('/contact-us', function(req, res, next) {
  res.render('pages/contact-us', { page: 'contact-us', title: 'Contact Us' });
});

router.get('/donate', function(req, res, next) {
  res.render('pages/donate', { page: 'donate', title: 'Donate' });
});

// router.get('/program-information', function(req, res, next) {
//   res.render('pages/program-information', { page: 'program-information', title: 'Program Information' });
// });

module.exports = router;
