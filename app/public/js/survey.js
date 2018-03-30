$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    //Retrieves user's answers
    var userChoices = {

    };

    //AJAX posts the data to the match API
    $.post("/api/match", userChoices, function(result) {

        //Retrieves the AJAX post result and updates the hidden modal.
        $("#match-message").text("You are...");
        $("#match-name").text(result.name);
        $("#match-img").attr("src", result.photo);
        $("#match-description").text(result.description);

        //Shows the modal
        $("#match-modal").modal("toggle");
    });
});