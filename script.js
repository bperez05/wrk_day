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
//local storage to each hour block
$("#8am-hour .description").val(localStorage.getItem("8am-hour"));

$("#9am-hour .description").val(localStorage.getItem("9am-hour"));

$("#10am-hour .description").val(localStorage.getItem("10am-hour"));

$("#11am-hour .description").val(localStorage.getItem("11am-hour"));

$("#12pm-hour .description").val(localStorage.getItem("12pm-hour"));

$("#1pm-hour .description").val(localStorage.getItem("1pm-hour"));

$("#2pm-hour .description").val(localStorage.getItem("2pm-hour"));

$("#3pm-hour .description").val(localStorage.getItem("3pm-hour"));

$("#4pm-hour .description").val(localStorage.getItem("4pm-hour"));

$("#5pm-hour .description").val(localStorage.getItem("5pm-hour"));

function timeTracker() {
    var currentHour = moment().hour(); // pulls from moment.js 
    
    (".time-block").each(function () {// loop through time blocks
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //goes through css/html given classes of past, present, or future.
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
timeTracker(); //re-starts funcation all over 
})