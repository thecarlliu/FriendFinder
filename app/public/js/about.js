$(document).ready(function(){
    $('.modal').modal();
});

//AJAX gets all scots from the API.
$.get("/api/all", function(req, res) {

}).then(function(scots) {
    displayAll(scots);
});

//Creates a div for each scot in the list and displays them in the gallery section.
function displayAll(list) {
    var $gallery = $("#gallery");
    for (var i=0;i<list.length;i++) {

        //Creates container
        var scotBox = $("<div>");
        scotBox.addClass("col s6 m4 l2");
        var modalTrigger = $("<a>");
        modalTrigger.addClass("waves-effect waves-light modal-trigger");
        modalTrigger.attr("href", "#scot-modal");
        //Creates image with attributes that hold information needed for modal when clicked.
        var scotImg = $("<img>");
        scotImg.attr("src", list[i].image);
        scotImg.attr("width", "120px");
        scotImg.attr("height", "120px");
        scotImg.attr("scot-name", list[i].name);
        scotImg.attr("scot-description", list[i].description);
        scotImg.attr("onclick", "setModal(this)");

        //Display
        modalTrigger.append(scotImg);
        scotBox.append(modalTrigger);
        $gallery.append(scotBox);
    }
}

//When an image of a scot is clicked, triggers modal pop-up with the appropriate info.
function setModal(scot) {
    //Adds info from img-attributes to modal
    $("#scot-name").text("Meet "+$(scot).attr("scot-name"));
    $("#scot-img").attr("src", $(scot).attr("src"));
    $("#scot-img").attr("width", "240px");
    $("#scot-img").attr("height", "240px");
    $("#scot-description").text($(scot).attr("scot-description"));
}