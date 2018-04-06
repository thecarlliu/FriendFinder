var userChoices = [0,0,0,0,0,0,0,0,0,0];
var qCount = 1;

//Initializes carousel and select
$(document).ready(function(){
    $('.modal').modal();
});

//Retrieves questions from data, and creates carousel items with the appropriate content for each question and their respective set of answers.
$.get("/api/questions", function(req, res) {
}).then(function(questions) {
    for (var i=0;i<questions.length;i++) {
        var carouselItem = $("<a>");
        carouselItem.addClass("carousel-item amber-text text-accent-4 responsive-img");

        var qDiv = $("<div>");
        qDiv.addClass("row");
        var qH6 = $("<h6>");
        qH6.append(questions[i].id + ": " + questions[i].question);
        qDiv.append(qH6);
        carouselItem.append(qDiv);

        var aDiv = $("<div>");
        aDiv.addClass("row");

        var aInputs = $("<div>");
        aInputs.addClass("col s12 m12 l12");
        var form = $("<form>");
        form.attr("action", "#");
        var aRow = $("<div>");
        aRow.addClass("row");

        for (var j=0; j<questions[i].answers.length;j++) {

            var aCol = $("<div>");
            aCol.addClass("col s6 m4 l3");
            var p = $("<p>");
            var label = $("<label>");
            label.attr("for", questions[i].id+"A"+(parseInt(j)+1).toString());
            var input = $("<input>");
            input.attr("id", questions[i].id+"A"+(parseInt(j)+1).toString());
            input.attr("onclick", "updateAnswers(this)");
            input.attr("q-num", i+1);
            input.attr("name", questions[i].id);
            input.attr("value", j+1);
            input.attr("type", "radio");
            var span = $("<span>");
            span.text(questions[i].answers[j]);
            var aImg = $("<img>");
            aImg.attr("src", questions[i].images[j]);
            aImg.attr("width", "60%");
            aImg.attr("height", "auto");
            aImg.addClass("responsive-img");

            label.append(span);
            p.append(input);
            p.append(label);
            aCol.append(p);
            aCol.append(aImg);
            aRow.append(aCol);
        }

        form.append(aRow);
        aInputs.append(form);
        aDiv.append(aInputs);
        carouselItem.append(aDiv);
        $("#survey-carousel").append(carouselItem);
    }
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
});

//Shows previous question
$("#prev-btn").on("click", function() {
    $(".carousel").carousel("prev");
    if (qCount===1) {
        qCount = 10;
    }
    else {
        qCount--;
    }
    updateCarouselSize("survey-carousel");
});

//Shows next question
$("#next-btn").on("click", function() {
    $(".carousel").carousel("next");
    if (qCount === 10) {
        qCount = 1;
    }
    else {
        qCount++;
    }
    updateCarouselSize("survey-carousel");
});

//Updates carousel size based on the question currently being viewed.
function updateCarouselSize(carouselID) {
    if (qCount===8) {
        document.getElementById(carouselID).style['min-height'] = "1100px";
    }
    else if (qCount===9) {
        document.getElementById(carouselID).style['min-height'] = "1400px";
    }
    else if (qCount===10) {
        document.getElementById(carouselID).style['min-height'] = "1300px";
    }
    else if (qCount===1 || qCount===2 || qCount===3 || qCount === 6) {
        document.getElementById(carouselID).style['min-height'] = "600px";
    }
    else {
        document.getElementById(carouselID).style['min-height'] = "900px";
    }

}

//Updates user's answers based on the choice that was clicked.
function updateAnswers(choice) {
    var $choice = $(choice);
    var qNum = $choice.attr("q-num");
    userChoices[qNum-1] = $choice.val();
    console.log(userChoices);
}

$("#submit-btn").on("click", function(event) {
    event.preventDefault();
    var unfinished = false;
    for (var i=0;i<userChoices.length;i++) {
        if (userChoices[i] === 0) {
            unfinished = true;
            break;
        }
    }
    if (unfinished) {
        alert("One or more questions were left unanswered!\nAnswer them all before submitting.");
    }
    else {
        var user = {
            choices: userChoices
        };

        //AJAX posts the data to the match API
        $.post("/api/match", user, function(res) {
            //Retrieves the AJAX post result and updates the hidden modal.
            $("#match-message").text("You are most like...");
            $("#match-name").text(res.name);
            $("#match-img").attr("src", res.image);
            $("#match-img").attr("width", "240px");
            $("#match-img").attr("height", "240px");
            $("#match-description").text(res.description);
        });
    }
});