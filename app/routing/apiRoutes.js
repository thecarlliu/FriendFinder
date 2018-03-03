var friends = require("../data/friends");

//Exports GET and POST methods for our friends api
module.exports = function(app) {
    //Takes newFriend's survey results, compares it against all friends listed in friends Array
    //Determines most compatible friend.
    //Displays that match via modal pop-up
    function friendFinder(user, friendsList) {
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
        //TODO: figure out how to change external html element.
        //TODO: deploy to heroku
        //TODO: add link to portfolio
        //TODO: update README
        //TODO: add form validation
        // var modalBody = $("#mostCompatibleFriendData");
        // modalBody.append("<p>Your Most Compatible Friend is: "+mostCompatible.name+"</p>");
        // modalBody.append("<img> src="+mostCompatible.photo);
    }
    //Displays the JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends.list);
    });
    //Handles incoming survey results and the compatibility logic
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        //Finds most compatible friend
        friendFinder(newFriend, friends.list);

        //Then adds newFriend to friends Array.
        friends.list.push(newFriend);
    });
};
