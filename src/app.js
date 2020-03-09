


/****************************************putting a map *********************/
/**
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function gettingLocation(map) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>
            map.setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        )
    } else {
        alert('Por favor permita acceso a su geolocación')
    }
    map.setZoom(10);
}
// Function for marking hospitals in map
function addMarkersToMap(map) {
    let hSanJose = new H.map.Marker({ lat: -33.4165863944487, lng: -70.6533177048952 });
    map.addObject(hSanJose);
    let hTilTil = new H.map.Marker({ lat: -33.0867925761686, lng: -70.9245222208259 });
    map.addObject(hTilTil);
    let hfelixBulnes = new H.map.Marker({ lat: 33.4150570000325, lng: -70.6961030000026 });
    map.addObject(hSanJose);
    let hRdelRio = new H.map.Marker({ lat: -33.4153352789851, lng: -70.6550863146883 });
    map.addObject(hRdelRio);
    let hSanBorja = new H.map.Marker({ lat: -33.4604980000163, lng: -70.6423199999984 });
    map.addObject(hSanBorja);

}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
let platform = new H.service.Platform({
    apikey: '0X99ixE-W6vl9eBWT3gd13uiWOOgPW7X683wjR6U_Dk'
});
let defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Santiago
let map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
    center: { lat: -33.4569397, lng: -70.6482697 },
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
let ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
    gettingLocation(map);
    addMarkersToMap(map);
}

