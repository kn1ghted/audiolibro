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