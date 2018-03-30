//AJAX gets all scots from the API.
$.get("/api/all", function(scots) {
    displayAll(scots);
});


//Creates a card for each scot in the list and displays them in the gallery section.
function displayAll(list) {
    var $gallery = $("#gallery");
    for (i=0;i<list.length;i++) {
        $gallery.append("");
    }
}