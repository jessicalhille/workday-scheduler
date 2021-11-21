// Display today's day
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    // click listener for the save button
    $(".saveBtn").on("click", function() {
        // get values in JQuery
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        // save to local
        localStorage.setItem(time, text);
    });

    function scheduleTime() {
        // get current time
        var timeNow = moment().hour();

        // loop time blocks
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // used to check time and color code the boxes
            if (blockTime < timeNow) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    };

    // get each hour from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    scheduleTime();
})