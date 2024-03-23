const apiUrl = "https://api.kanye.rest";

$(".div-quote").on("click", () => {
  $(".div-quote").addClass("hidden");
  $(".shining-ball").removeClass("hidden");
});

$("#button").on("click", () => {
  const apiUrl = "https://api.kanye.rest";

  // Make a GET request
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      $(".quote").text(data.quote);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  $(".div-quote").removeClass("hidden");
  $(".shining-ball").addClass("hidden");
});