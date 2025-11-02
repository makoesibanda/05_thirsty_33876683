// main.js
 // This file defines all the main routes for the Thirsty Student Shop web app.
// It handles page rendering and form submissions for registration, search, and survey features.
 
const express = require("express");
const router = express.Router();

// Application data shared across views
// Includes shop name, product categories, and branch information
var shopData = {
  shopName: "The Thirsty Student Shop",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shopLocations: [
    { city: "London", manager: "Alice Johnson", address: "123 Oxford St, London" },
    { city: "Manchester", manager: "Bob Smith", address: "45 Deansgate, Manchester" },
    { city: "Birmingham", manager: "Carla Lewis", address: "89 High St, Birmingham" }
  ]
};

 // Route handlers below----////
 
// Home page route
router.get('/', function (req, res) {
  res.render('index.ejs', shopData);
});

// About page route
router.get('/about', function (req, res) {
  res.render('about.ejs', shopData);
});

// Search page route
router.get('/search', function (req, res) {
  res.render('search.ejs', shopData);
});

// Handle search results (simple text output for now)
router.get('/search_result', function (req, res) {
  // In a real app, this would perform a database search
  res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

// Category result (currently unused placeholder)
router.get('/category_result', function (req, res) {
  res.send(req.query);
});

 // Registration routes
 
// Display the registration form
router.get('/register', function (req, res) {
  res.render('register.ejs', shopData);
});

// Handle registration form submission
router.post('/registered', function (req, res) {
  res.send(
    'Hello ' + req.body.first + ' ' + req.body.last +
    ', you are now registered! We will send an email to you at ' + req.body.email + '.'
  );
});

 // Survey routes below  --///// 
 
// Display the customer survey form
router.get('/survey', function (req, res) {
  res.render('survey.ejs', shopData);
});

// Handle survey form submission and show results
router.post('/survey-submitted', function (req, res) {
  res.render('survey_submitted.ejs', {
    shopName: shopData.shopName,
    responses: req.body
  });
});

 // Export the router object so index.js can access these routes
 module.exports = router;
