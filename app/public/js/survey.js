//Initializes carousel and select
$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
    $('select').material_select();
    $('.modal').modal();
});

//Shows previous question
$("#prev-btn").on("click", function() {
    $(".carousel").carousel("prev");
});

//Shows next question
$("#next-btn").on("click", function() {
    $(".carousel").carousel("next");
});

$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    //Retrieves user's answers
    var a1 = $("#a1").val();
    var a2 = $("#a2").val();
    var a3 = $("#a3").val();
    var a4 = $("#a4").val();
    var a5 = $("#a5").val();
    var a6 = $("#a6").val();
    var a7 = $("#a7").val();
    var a8 = $("#a8").val();
    var a9 = $("#a9").val();
    var a10 = $("#a10").val();

    var userChoices = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10];

    //AJAX posts the data to the match API
    $.post("/api/match", userChoices, function(result) {

        //Retrieves the AJAX post result and updates the hidden modal.
        $("#match-message").text("You are most like...");
        $("#match-name").text(result.name);
        $("#match-img").attr("src", result.photo);
        $("#match-description").text(result.description);

        //Shows the modal
        $("#match-modal").modal("toggle");
    });
});