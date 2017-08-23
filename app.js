const colorSquares = document.getElementById("color-squares");

let sqRow = '<div class="sq-row"></div>';

let square = '<i class="square fa fa-square" aria-hidden="true"></i>';

function createSqRows() {
  for (var i = 0; i < 10; i++) {
    colorSquares.innerHTML += sqRow;
  }
}

createSqRows();

$(".sq-row").html(function createSquares() {
  for (var i = 0; i < 30; i++) {
    this.innerHTML += square;
    $(".square").css("margin", "0px 5px");
    $(".square").css("opacity", "1");
  }
});


var feed = new Instafeed({
        get: 'tagged',
        tagName: 'typhoidbeach',
        clientId: 'ad9397be30b944a6b1ff1c25a8fdecb0'
    });
    feed.run();
