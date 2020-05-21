$(".change").on("click", function() {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function() {
        location.reload();
    }).catch(function(err) {
        console.log(err);
    })
});

$(".add").on("submit", function(event) {
    
    event.preventDefault();
    console.log("hey");

    let newBurger = {
        burgerName: $("#newBurger").val().trim()
    }

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
        //   location.reload();
        }
    ).catch(function(err) {
        console.log(err);
    });
});