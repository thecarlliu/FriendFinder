// var scots = require("../../data/scots.js");

$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    //Retrieves user's answers
    var user = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores:
        $("#q1").val().trim()+","+
        $("#q2").val().trim()+","+
        $("#q3").val().trim()+","+
        $("#q4").val().trim()+","+
        $("#q5").val().trim()+","+
        $("#q6").val().trim()+","+
        $("#q7").val().trim()+","+
        $("#q8").val().trim()+","+
        $("#q9").val().trim()+","+
        $("#q10").val().trim()
    };

    //Compares user's answers to list of scots, determines most compatible, dispplays in modal pop-up.
    function findMatch(user, listScots) {
        var userScores = user.scores.split(",");
        var totalDifference = 50;
        var mostCompatible;
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
    //findMatch(user, scots);
});