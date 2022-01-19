$(document).ready(function () { //loads html then css
    //shows current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // pulled format from moment.js 
  //saveBtn click listener for user enter time
  $(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //sets to local storage 
    localStorage.setItem(time, text);
})
