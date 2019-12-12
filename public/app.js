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