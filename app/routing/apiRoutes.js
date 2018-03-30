var scots = require("../data/scots.js");

//Exports GET and POST methods for our scots api
module.exports = function(app) {

    //Displays the JSON of all possible scots
    app.get("/api/", function (req, res) {
        res.json(scots.list);
    });
};
