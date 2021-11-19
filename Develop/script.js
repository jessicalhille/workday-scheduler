// Display today's day
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        console.log("success");
    })
})