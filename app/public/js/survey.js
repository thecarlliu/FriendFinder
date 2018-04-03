var userChoices = [0,0,0,0,0,0,0,0,0,0];

//Initializes carousel and select
$(document).ready(function(){
    $('.modal').modal();
});

//Retrieves questions from data, and creates carousel items with the appropriate content for each question and their respective set of answers.
$.get("/api/questions", function(req, res) {
}).then(function(questions) {
    for (var i=0;i<questions.length;i++) {
        var carouselItem = $("<a>");
        carouselItem.addClass("carousel-item amber-text text-accent-4");

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
            aImg.attr("width", "100px");
            aImg.attr("height", "100px");

            label.append(input);
            label.append(span);
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
});

//Shows next question
$("#next-btn").on("click", function() {
    $(".carousel").carousel("next");
});

//Updates user's answers based on the choice that was clicked.
function updateAnswers(choice) {
    var $choice = $(choice);
    var qNum = $choice.attr("q-num");
    userChoices[qNum-1] = $choice.val();
    console.log(userChoices);
}

$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    var data = userChoices;

    //AJAX posts the data to the match API
    $.post("/api/match", data, function(result) {

        //Retrieves the AJAX post result and updates the hidden modal.
        $("#match-message").text("You are most like...");
        $("#match-name").text(result.name);
        $("#match-img").attr("src", result.image);
        $("#match-img").attr("width", "240px");
        $("#match-img").attr("height", "240px");
        $("#match-description").text(result.description);
    });
});