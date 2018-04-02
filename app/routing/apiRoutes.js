var scots = require("../data/scots.js");
var questions = require("../data/questions.js");

//Exports GET and POST methods for our scots api
module.exports = function(app) {

    //Displays the JSON of all scots
    app.get("/api/all", function (req, res) {
        res.json(scots.list);
    });

    app.get("/api/questions", function(req, res) {
        console.log(questions.list);
        res.json(questions.list);
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
    var bestScore = Infinity;
    var match;

    //Algorithm for determining match
    for (var i=0;i<listScots.length;i++) { //for each scot,
        var scotChoices = listScots[i].responses;
        var currScore = 0;
        for (var j=0;j<userChoices.length;j++) { //for each of the user's answers,
            currScore+=userChoices[j]-scotChoices[j]; //increment currScore by difference between the value of a user's answer and a scot's answer
        }
        if (currScore <= bestScore) { //if the current score is less than or equal to the best score (lower is better),
            bestScore = currScore; //update best score
            match = listScots[i]; //update match
        }
    }
    return match;
}
