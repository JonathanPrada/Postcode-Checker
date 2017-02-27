//Insert out map into the map container in the html file
document.getElementById("map").onload = function() {initMap()()};

//Initiate variable
var map;

//Create the map
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 51.507364, lng: -0.127764},
  zoom: 9
});

//Insert polygon at initiation
polygon();

//Initiate our geocoding
var geocoder = new google.maps.Geocoder();

document.getElementById('submit').addEventListener('click', function() {
  geocodeAddress(geocoder, map);
  check();
});
}

//function for drawing our polygon
function polygon() {
var shapes = [];
var path = [
new google.maps.LatLng(51.50532341149336, -0.116729736328125),
new google.maps.LatLng(51.711714251204526, -0.383148193359375),
new google.maps.LatLng(51.682773832813275, -0.133209228515625),
new google.maps.LatLng(51.68447672270844, 0.102996826171875),
new google.maps.LatLng(51.57706953722565, 0.276031494140625),
new google.maps.LatLng(51.416338106400396, 0.223846435546875),
new google.maps.LatLng(51.30142806450288, 0.146942138671875),
new google.maps.LatLng(51.263633525637, -0.061798095703125),
new google.maps.LatLng(51.31516382328001, -0.341949462890625),
new google.maps.LatLng(51.327179239685655, -0.468292236328125),
new google.maps.LatLng(51.40091918770499, -0.531463623046875),
new google.maps.LatLng(51.5429188223739, -0.503997802734375),
new google.maps.LatLng(51.61290019118336, -0.534210205078125),
new google.maps.LatLng(51.677664778834455, -0.457305908203125),
new google.maps.LatLng(51.705757442694036, -0.43704986572265625),
new google.maps.LatLng(51.71168224580403, -0.3828813175978212)];
var polyline = new google.maps.Polygon({path:path, strokeColor: "#4863A0", strokeOpacity: 1.0, strokeWeight: 2});
polyline.setMap(map);
//map.setCenter(new google.maps.LatLng(51.637207965436986, -0.3263351600585338), 11);
shapes.push(polyline);
}

//Onclick of our map headers
function northLondon() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.648437, lng: -0.146922},
      zoom: 10
    });
    polygon();
}

function eastLondon() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.22637, lng: -0.081551},
      zoom: 10
    });
    polygon();
}

function southLondon() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.419720, lng: -0.066965},
      zoom: 12
    });
    polygon();
}

function westLondon() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.465133, lng: -0.255646},
      zoom: 11
    });
    polygon();
}

//Geocode our value submitted
function geocodeAddress(geocoder, resultsMap) {
var address = document.getElementById('postcodesearch').value;
geocoder.geocode({'address': address}, function(results, status) {
  if (status === 'OK') {
    resultsMap.setCenter(results[0].geometry.location);
    var marker = new google.maps.Marker({
      map: resultsMap,
      position: results[0].geometry.location
    });
    map.setZoom(12);
  } else {
    let notification = document.getElementById("notificationtext");
    notification = document.getElementById("notificationtext").innerHTML = "";
    notification = document.getElementById("notificationtext").innerHTML = "You need to insert a valid postcode";
  }
});
}

//Check against our validcodes and render the correct message
function check() {

    //list of postcodes we'd like to verify agaisnt
    const validCodes=["E1","E10","E11","E12","E13","E14","E15","E16","E17","E18","E1W",
    "E2","E3","E4","E5","E6","E7","E8","E9","EC1","EC1A","EC1M","EC1N","EC1R","EC1V",
    "EC1Y","EC2","EC2A","EC2M","EC2N","EC2R","EC2V","EC2Y","EC3","EC3A","EC3M","EC3N",
    "EC3P","EC3R","EC3V","EC4","EC4A","EC4M","EC4N","EC4R","EC4V","EC4Y","N1","N10",
    "N11","N12","N13","N14","N15","N16","N17","N18","N19","N2","N20","N21","N22","N3",
    "N4","N5","N6","N7","N8","N9","NW1","NW10","NW11","NW2","NW3","NW4","NW5","NW6",
    "NW7","NW8","NW9","SE1","SE10","SE11","SE12","SE13","SE14","SE15","SE16","SE17",
    "SE18","SE19","SE2","SE20","SE21","SE22","SE23","SE24","SE25","SE26","SE27","SE28",
    "SE3","SE4","SE5","SE6","SE7","SE8","SE9","SW1","SW10","SW11","SW12","SW13","SW14",
    "SW15","SW16","SW17","SW18","SW19","SW1A","SW1E","SW1H","SW1P","SW1V","SW1W","SW1X",
    "SW1Y","SW2","SW20","SW3","SW4","SW5","SW6","SW7","SW8","SW9","W1","W10","W11","W12",
    "W13","W14","W1B","W1C","W1D","W1F","W1G","W1H","W1J","W1K","W1M","W1S","W1T","W1U",
    "W1W","W2","W3","W4","W5","W6","W7","W8","W9","WC1","WC1A","WC1B","WC1E","WC1H","WC1N",
    "WC1R","WC1V","WC1X","WC2","WC2A","WC2B","WC2E","WC2H","WC2N","WC2R"];

    //Get the current value
    var address = document.getElementById('postcodesearch').value;
    //alert(address);

    //Convert our value into uppercase
    address = address.toUpperCase();
    //alert(address);

    //Only get the first three letters from our value
    address = address.substring(0, 3);
    //alert(address)

    //check if value inside validCodes array
    let aBoolean = validCodes.includes(address); //returns true or false
    //alert(aBoolean);

    if (aBoolean) {
        //alert(aBoolean);
        let notification = document.getElementById("notificationtext");
        notification = document.getElementById("notificationtext").innerHTML = "";
        notification = document.getElementById("notificationtext").innerHTML = "We serve your area!";
    } else {
        //alert(aBoolean);
        let notification = document.getElementById("notificationtext");
        notification = document.getElementById("notificationtext").innerHTML = "";
        notification = document.getElementById("notificationtext").innerHTML = "We do not serve your area";
    }
}