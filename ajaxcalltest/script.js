const quotes = [];

$.ajax({
  //  url: "https://api.myjson.com/bins/k4o2v",
    url: "https://api.myjson.com/bins/1e0mpm",
    cache: false,
    dataType: "json",
    success: (data) => {
      for (i = 0; i < data._embedded.quotes.length; i++) {
        quotes.push(data._embedded.quotes[i].value);
      }
      quotes.sort((a, b) => a> b ? 1 : -1);
      test();
    },
    error: function(xhr, textStatus, errorThrown) {
      console.log(errorThrown);
      $("data");
    }
})

function test() {
  quotes.forEach(el => {
  $(`<li>${el}</li>`).appendTo("#videos-list");
  });
}
