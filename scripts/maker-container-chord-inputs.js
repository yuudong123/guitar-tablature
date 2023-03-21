$("#container-chord-input").sortable({
  axis: "y",
  cancel: "input",
  containment: "parent",
});
$("#container-chord-input").on("sortupdate", function (event, ui) {
  var chordLines = $(this).find(".chord-line");

  chordLines.each(function (index, element) {
    var inputs = $(element).find("input");
  });
});
