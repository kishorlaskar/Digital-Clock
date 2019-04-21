window.addEventListener("load", ()=>
{
    var Lat;
var long;

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {

        lat = position.coords.latitude;
        long = position.coords.longitude;