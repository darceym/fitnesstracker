// click events for the two buttons
$("#submitNew").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/submit",
      dataType: "json",
      data: {
        new: $("#new").val(),
        created: Date.now()
      }
    })
      .then(function(data) {
        console.log(data);
        getNewWorkout();
        $("#new").val("");
      }
      );
    return false;
  });

  $("#submitPrevious").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/submit",
      dataType: "json",
      data: {
        previous: $("#previous").val(),
        created: Date.now()
      }
    })
      .then(function(data) {
        console.log(data);
        getPreviousWorkout();
        $("#previous").val("");
      }
      );
    return false;
  });

// render the new workouts to the screen
$("#new").empty();{
$.getJSON("/new", function(data) {
  for (var i = 0; i < data.length; i++) {
    $("#new").prepend("<tr><td>" + data[i].new + "</td><td>" + data[i]._id);
  }
  $("#new").prepend("<tr><th>New</th></tr>");
});
};

// render the previous workouts to the scree
$("#previous").empty();{
$.getJSON("/previous", function(data) {
      for (var i = 0; i < data.length; i++) {
        $("#previous").prepend("<tr><td>" + data[i].new + "</td><td>" + data[i]._id);
    }
      $("#previous").prepend("<tr><th>Previous</th></tr>");
});
};

getNewWorkout();
getPreviousWorkout();