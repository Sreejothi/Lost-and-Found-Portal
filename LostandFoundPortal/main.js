function goToCategory() {
document.getElementById('loginPage').style.display = 'none';
document.getElementById('categoryPage').style.display = 'block';
}


function goToForm(type) {
document.getElementById('categoryPage').style.display = 'none';
document.getElementById('formPage').style.display = 'block';
document.getElementById('formTitle').innerText = type === 'lost' ? 'Lost Item Form' : 'Found Item Form';
initMap();
}


let map, marker;
function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
center: { lat: 20.5937, lng: 78.9629 },
zoom: 5,
});


map.addListener("click", function (event) {
placeMarker(event.latLng);
});
}


function placeMarker(location) {
if (marker) marker.setMap(null);
marker = new google.maps.Marker({ position: location, map: map });
}


function submitForm() {
alert("Form Submitted Successfully!");
}