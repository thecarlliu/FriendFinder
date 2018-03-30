//Node module
var path = require("path");

//Exports GET methods for html pages
module.exports = function(app) {

    //Sends user to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/survey.html"));
    });

    //Sends user to the about page
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/about.html"));
    });

    //Sends user to the home page - Defaults to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/home.html"));
    });
};
