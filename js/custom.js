var map = '';
var center;

function initialize() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(46.011974, -112.526195),
        scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
};

function calculateCenter() {
    center = map.getCenter();
};

function loadGoogleMap() {
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&'+'callback=initialize';
    document.body.appendChild(script);

};


/*html document is loaded, DOM ready */
$(function() {

    $('#preview a').nivoLightbox({
        effect: 'fadedScale',
    });

    var wow = new WOW({
        mobile: false
    });
    wow.init();

    loadGoogleMap();

});