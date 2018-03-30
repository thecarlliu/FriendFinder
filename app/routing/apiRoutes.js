var scots = require("../data/scots.js");

//Exports GET and POST methods for our scots api
module.exports = function(app) {

    //Displays the JSON of all scots
    app.get("/api/all", function (req, res) {
        res.json(scots.list);
    });

    //Triggers matchmaking
    app.post("/api/match", function (req, res) {
        var userChoices = req.body;
        var result = findMatch(userChoices, scots.list);
        res.json(result);
    });
};

//Compares user's answers to list of scots, determines most compatible, displays in modal pop-up.
function findMatch(userChoices, listScots) {
    var match;
    return match;
}
