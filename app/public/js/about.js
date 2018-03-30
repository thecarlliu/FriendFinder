//AJAX gets all scots from the API.
$.get("/api/all", function(scots) {
    displayAll(scots);
});

//Creates a div for each scot in the list and displays them in the gallery section.
function displayAll(list) {
    var $gallery = $("#gallery");
    for (var i=0;i<list.length;i++) {

        //Creates container
        var scotBox = $("<div>");
        scotBox.addClass("col s6 m4 l2");
        //Creates image with attributes that hold information needed for modal when clicked.
        var scotImg = $("<img>");
        scotImg.attr("src", list[i].image);
        scotImg.attr("scot-name", list[i].name);
        scotImg.attr("scot-description", list[i].description);
        scotImg.attr("onclick", displayScot(this));

        //Display
        scotBox.append(scotImg);
        $gallery.append(scotBox);
    }
}

//When an image of a scot is clicked, triggers modal pop-up with the appropriate info.
function displayScot(obj) {
    //Adds info from img-attributes to modal
    $("#scot-mesaage").text("Meet "+obj.attr("scot-name"));
    $("#scot-img").attr("src", obj.attr("src"));
    $("#scot-description").text(obj.attr("scot-description"));

    //Shows the modal
    $("#scot-modal").modal("toggle");
}