const express = require("express");
const morgan = require("morgan");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const middlewares = require('./middlewares/middleware.js');

// Custom Imports
const router = require('./routes/routes');

// Initializing Express App
const app = express();

// Adding middlewares for the app to use 
app.use(morgan('common'));
// Parsing the requests in JSON
app.use(bodyParser.json());
// To Compress JS
app.use(compression());
// To hide HTTP headers
app.use(helmet());
// Initializing router
app.use('/api', router);
// Adding middleware => ErrorHandler & notFound
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
// Setting Port for running the server
app.set('port', process.env.PORT || 1337);
// Allowing use of public files including HTML, CSS & JS
app.use(
    express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

module.exports = app;