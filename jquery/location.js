
var col = [
['The College of Nerd and Wierd People - Gordon College -', 14.836026, 120.283670],
['Columban College - Barretto', 14.856251, 120.268646],
['St. Joseph College', 14.837932, 120.285792],
['Mondrian Aura College', 14.825630, 120.277800],
['Lyceum of Subic Bay', 14.823450, 120.279109],
['Columban College - Main', 14.826526, 120.281734],
['Virgen De Los Remedios College', 14.836140, 120.285473],
['Holy Infant Jesus College', 14.851028, 120.290381]
];

var fstfd = [
['Jollibee', 14.841027, 120.286439],
['Jollibee', 14.838543, 120.284377],
['Jollibee', 14.827066, 120.282441],
['Jollibee', 14.824214, 120.282202],
['McDonalds', 14.827189, 120.282817],
['McDonalds', 14.839867, 120.285216],
['ChicBoy', 14.827631, 120.282675],
['Mang Inasal', 14.827328, 120.282505],
['Greenwich', 14.839067, 120.284308],
['Chowking', 14.839151, 120.283929]
];

var bnk = [
['Philippine National Bank', 14.842770, 120.288887],
['Land Bank of the Philippines', 14.842713, 120.288659],
['Metrobank', 14.840067, 120.285432],
['BPI', 14.839078, 120.284457],
['RCBC', 14.832666, 120.280583],
['Union Bank', 14.830094, 120.281034]
];

var rest = [
['Maxs Restaurant', 14.827418, 120.282762],
['Kongs', 14.828350, 120.282300],
['Sams Pizza', 14.830140, 120.281303],
['Wimpys', 14.828500, 120.282140]
];


//-----------------------------------------------------------------//              //-----------------------------//


//-----------------------------------------------------------------//              //-----------------------------//

function College() {
var myOptions = {
disableDefaultUI: true,
mapTypeId: google.maps.MapTypeId.ROADMAP,
mapTypeControl: false
};
var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
var infowindow = new google.maps.InfoWindow();
var marker, i;
var bounds = new google.maps.LatLngBounds();

for (i = 0; i < col.length; i++) {
var pos = new google.maps.LatLng(col[i][1], col[i][2]);
bounds.extend(pos);
marker = new google.maps.Marker({
position: pos,
map: map
});
google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(col[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
}
map.fitBounds(bounds);
}

//-----------------------------------------------------------------//              //-----------------------------//


//-----------------------------------------------------------------//              //-----------------------------//


function FastFood() {
var myOptions = {
disableDefaultUI: true,
mapTypeId: google.maps.MapTypeId.ROADMAP,
mapTypeControl: false
};
var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
var infowindow = new google.maps.InfoWindow();
var marker, i;
var bounds = new google.maps.LatLngBounds();

for (i = 0; i < fstfd.length; i++) {
var pos = new google.maps.LatLng(fstfd[i][1], fstfd[i][2]);
bounds.extend(pos);
marker = new google.maps.Marker({
position: pos,
map: map
});
google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(fstfd[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
}
map.fitBounds(bounds);
}


//-----------------------------------------------------------------//              //-----------------------------//


//-----------------------------------------------------------------//              //-----------------------------//

function Bank() {
var myOptions = {
disableDefaultUI: true,
mapTypeId: google.maps.MapTypeId.ROADMAP,
mapTypeControl: false
};
var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
var infowindow = new google.maps.InfoWindow();
var marker, i;
var bounds = new google.maps.LatLngBounds();

for (i = 0; i < bnk.length; i++) {
var pos = new google.maps.LatLng(bnk[i][1], bnk[i][2]);
bounds.extend(pos);
marker = new google.maps.Marker({
position: pos,
map: map
});
google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(bnk[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
}
map.fitBounds(bounds);
}

//-----------------------------------------------------------------//              //-----------------------------//



//-----------------------------------------------------------------//              //-----------------------------//


function Restaurant() {
var myOptions = {
disableDefaultUI: true,
mapTypeId: google.maps.MapTypeId.ROADMAP,
mapTypeControl: false
};
var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
var infowindow = new google.maps.InfoWindow();
var marker, i;
var bounds = new google.maps.LatLngBounds();

for (i = 0; i < rest.length; i++) {
var pos = new google.maps.LatLng(rest[i][1], rest[i][2]);
bounds.extend(pos);
marker = new google.maps.Marker({
position: pos,
map: map
});
google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(rest[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
}
map.fitBounds(bounds);
}

//-----------------------------------------------------------------//              //-----------------------------//


//-----------------------------------------------------------------//              //-----------------------------//

