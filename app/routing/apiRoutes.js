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
    var userChoices = userChoices.split(",");
    var highScore = 0;
    var match;

    //Algorithm for determining match
    for (var i=0;i<listScots.length;i++) { //for each scot
        var scotChoices = listScots[i].responses.split(",");
        var currScore = 0;
        for (var j=0;j<userChoices.length;j++) { //for each of the user's answers, compare user answer to respective scot answer
            if (parseInt(userChoices[j]) === parseInt(scotChoices[j])) { //if they are the same,
                currScore++; //increment currScore
            }
        }
        if (currScore >= highScore) { //if the match score is higher than or equal to the high score,
            highScore = currScore; //update high score
            match = listScots[i]; //update match
        }
    }
    return match;
}
