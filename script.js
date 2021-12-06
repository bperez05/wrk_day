// fuction loacds html and css files
$(document).ready(function () {

    //pulled from moment.js to display date and time
    $("#currentDay").text(moment().format("MMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () { 
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
})