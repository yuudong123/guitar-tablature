$(function () {
  // ===== header menu bar =====
  $(".header-menu-hover").mouseenter(function () {
    var bar = $(this).find("#bar");
    bar.css("width", "60px");
    bar.css("left", "0");
  });
  $(".header-menu-hover").mouseleave(function () {
    var bar = $(this).find("#bar");
    bar.css("width", "0");
    bar.css("left", "50%");
  });
  $(".logo").mouseenter(function () {
    var bar = $(this).find("#bar");
    bar.css("width", "150px");
    bar.css("left", "0");
  });
  $(".logo").mouseleave(function () {
    var bar = $(this).find("#bar");
    bar.css("width", "0");
    bar.css("left", "50%");
  });
  // ===== header menu bar =====

  // ===== header scroll animate =====
  $(window).scroll(function () {
    if ($(window).scrollTop() < 130) {
      $("header").css({
        boxShadow: "none",
        top: 0,
      });
    } else {
      $("header").css({
        boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
        top: "-50px",
      });
      $("header").mouseenter(function () {
        $("header").css({
          top: 0,
        });
      });
      // $("header").mouseleave(function () {
      //   $("header").css({
      //     top: "-50px",
      //   });
      // });
    }
  });
  // ===== header scroll animate =====

  // ===== search =====
  $("#search").click(function (e) {
    e.preventDefault();
    $("#search-box").animate(
      {
        top: 0,
      },
      300,
      "swing"
    );
  });
  $("#search-box").mouseleave(function () {
    $("#search-box").animate(
      {
        top: "-65px",
      },
      300,
      "swing"
    );
  });
  // ===== search =====

  $("#btn-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
  });
});
