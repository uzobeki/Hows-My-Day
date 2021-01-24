console.log(this);
$(document).ready(function() {
  // Save button
  $(".saveBtn").on("click", function(){
    var schedText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    localStorage.setItem(time, schedText);
  })
});

// Date and Time (Header)
var headDate = moment().format('LLLL');
$("#currentDay").append(headDate);

// Time
function keepTime(){
  var timeNow = moment().format('H');
  console.log(timeNow);

  $(".input-group").each(function(){
    var timeblock = parseInt($(this).attr("id"));
    console.log((timeblock));

    if(timeblock > timeNow) {
      $("textarea").removeClass("present");
      $("textarea").removeClass("past");
      $("textarea").addClass("future");
      console.log(timeblock < timeNow)
    }
    else if (timeblock === timeNow) {
      $("textarea").removeClass("future");
      $("textarea").removeClass("past");
      $("textarea").addClass("present");
      console.log(timeblock == timeNow);
    }
    else{
      $("textarea").removeClass("present");
      $("textarea").removeClass("future");
      $("textarea").addClass("past");
      console.log(timeblock < timeNow);
    };
    
  });

};
keepTime();
// Pull from Local Storage
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))