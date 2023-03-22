$(function () {
  //===== carousel keyboard =====
  $(window).keyup(function (e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
      $(".carousel-control-prev").click();
    } else if (e.keyCode == 39 || e.keyCode == 68) {
      $(".carousel-control-next").click();
    }
  });
  //===== carousel keyboard =====
});
