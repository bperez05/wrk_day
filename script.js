$(document).ready(function () { //loads html then css
    //shows current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // pulled format from moment.js 
  