

function ToogleUpdateBox() {
    $("#choosen-update").toggle();
}

function OpenBox(i) {

    if ($("#box").is(":visible")) {
        $("#box").fadeOut(0);
    }

    setTimeout(ToggleBox(i), 420);
}

function ToggleBox(i) {

    $("#box").fadeToggle(400);

    if (i != null) {
        createContent(i);
    }
}

$( function() {
    $( "#box" ).draggable({
        handle: ".boxheader"
    });
} );

function credits() {

    openCredits();

    $("#name").fadeIn(1500);

    setTimeout(function() {
        $("#credit_title").animate({
            "height": "26%",
        }, 4000, 'swing');
        
    }, 2500)

    setTimeout(function() {
        authors();
    }, 4000)
}