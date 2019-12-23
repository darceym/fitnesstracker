// click events for the two buttons
$("#submitNew").on("click", function () {
  console.log($("#rep").val())
  $.ajax({
    type: "POST",
    url: "/submit",
    dataType: "json",
    data: {
      new: $("#new").val(),
      reps: $("#rep").val(),
      created: Date.now()
    }
  })
    .then(function (data) {
      console.log(data);
      getPreviousWorkout();
      $("#new").val("");
    }
    );
  return false;
});

// $("#submitPrevious").on("click", function () {
//   $.ajax({
//     type: "POST",
//     url: "/submit",
//     dataType: "json",
//     data: {ß
//       previous: $("#previous").val(),
//       created: Date.now()
//     }
//   })
//     .then(function (data) {
//       console.log(data);

//     }
//     );
//   return false;
// });

// render the new workouts to the screen
// $("#new").empty();{
// $.getJSON("/new", function(data) {
//   for (var i = 0; i < data.length; i++) {
//     $("#new").prepend("<tr><td>" + data[i].new + "</td><td>" + data[i]._id);
//   }
//   $("#new").prepend("<tr><th>New</th></tr>");
// });
// };

// render the previous workouts to the screen
const getPreviousWorkout=()=> {
  $("#previous").empty(); {
    $.getJSON("/previous", function (data) {
      for (var i = 0; i < data.length; i++) {
        $("#previous").prepend("<tr><td>" + data[i].new + "</td><td>" + data[i].reps);
      }
      
      $("#previous").prepend("<tr><th>Excercise</th><th>Reps</th></tr>");
      $("#previous").prepend("<tr><th>Workouts</th><th></th></tr>");
    });
  };
}
// getNewWorkout();
 getPreviousWorkout();