const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;

// Create express app
const app = express();

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Using CORS for CSRF protection
app.use(cors());

// Require Task routes
const router = require("./router");

// Using as middleware
app.use("", router);

// Running Server
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});