//Node Modules
var express = require("express");
var bodyParser = require("body-parser");

//Initiates Express
var app = express();
var PORT = 3000;

//Sets up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Imports htmlRoutes functions
require("./app/routing/htmlRoutes")(app);
//Imports apiRoutes functions
require("./app/routing/apiRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});