var scots = require("../data/scots.js");

//Exports GET and POST methods for our friends api
module.exports = function(app) {
    //Takes newFriend's survey results, compares it against all friends listed in friends Array
    //Determines most compatible friend.
    //Displays that match via modal pop-up
    function findMatch(user, friendsList) {
        var userScores = user.scores.split(",");
        //console.log(userScores); //for testing
        var totalDifference = 50; //arbitrary number, just has to be larger than the possible total difference from comparing scores
        var mostCompatible; //keeps track of the current mostCompatible friend
        for (i = 0; i < friendsList.length; i++) {
            var diff = 0;
            var friendScores = friendsList[i].scores.split(",");
            for (j = 0; j < friendScores.length; j++) {
                diff += (Math.abs(parseInt(userScores[j])-parseInt(friendScores[j])));
            }
            if (diff < totalDifference) {
                mostCompatible = friendsList[i];
            }
        }
        //console.log("mostCompatible:"+mostCompatible.name); //for testing
        //TODO: figure out how to change external html element. modal popup working, but cant sent info to it.
        //TODO: add form validation
        // var modalBody = $("#mostCompatibleFriendData");
        //$("#mostCompatibleFriendData").empty();
        // modalBody.append("<p>Your Most Compatible Friend is: "+mostCompatible.name+"</p>");
        // modalBody.append("<img> src="+mostCompatible.photo);
    }

    //Displays the JSON of all possible scots
    app.get("/api/", function (req, res) {
        res.json(scots.list);
    });

    //Handles incoming survey results and the compatibility logic
    app.post("/api/scots", function(req, res) {
        var input = req.body;
        //Finds most compatible friend
        findMatch(input, scots.list);
    });
};
