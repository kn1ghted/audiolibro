jQuery(document).ready(function() {
    var settings = {
        repeat: true,
        solo: false,
        radiosolo: false,
        spacebar: true,
        tabview: false
    };
    jQuery(".player").trackSwitch(settings); // All other players are default
});

// smooth scroll if h2 has an id
jQuery(document).ready(function() {
    jQuery('h2[id]').click(function() {
        var element = jQuery(this).attr('id');
        jQuery('html, body').animate({
            scrollTop: jQuery('#' + element).offset().top
        }, 1000);
    });
});