$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Stop envelope click from blocking the link click
    envelope.click(function(event) {
        // Only trigger open() if the click is not on the link
        if (!$(event.target).closest('a').length) {
            open();
        }
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
});


