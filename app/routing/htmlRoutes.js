//Node module
var path = require("path");

//Exports GET methods for html pages
module.exports = function(app) {
    //Sends user to the home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //Sends user to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};
