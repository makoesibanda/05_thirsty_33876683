// index.js
// Main entry point for the Thirsty Student Shop web app
// Sets up Express, EJS, middleware, and routes
 
// Import required modules
const express = require('express');
const ejs = require('ejs');

// Create the Express application object//
const app = express();
const port = 8000;

// Configure EJS as the view (templating) engine
app.set('view engine', 'ejs');

// Serve static files such as CSS, images, and JS from the "public" folder
// This allows the browser to access files like /css/style.css
app.use(express.static('public'));

// Enable parsing of form data (from POST requests)
// This makes data submitted via forms available in req.body
app.use(express.urlencoded({ extended: true }));

// Load and use route definitions from routes/main.js
// All routes defined in main.js will be accessible under '/'
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Start the web server and listen for incoming requests
// The app will be available at http://localhost:8000
// I did not change the console.log text here because I was not insturcted to do so
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
