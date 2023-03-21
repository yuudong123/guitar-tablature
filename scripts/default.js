$(function () {
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
  $(".header-menu-hover-s").mouseenter(function () {
    var sbar = $(this).parent().find("#search-bar");
    sbar.css("width", "60px");
    sbar.css("right", "0");
  });
  $(".header-menu-hover-s").mouseleave(function () {
    var sbar = $(this).parent().find("#search-bar");
    sbar.css("width", "0");
    sbar.css("right", "30px");
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
});
