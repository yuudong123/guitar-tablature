$(document).ready(function () {
  const Buttons = $(".buttons");
  const saveButton = $(".save-btn");
  const Lines = $("#lines");
  const chordTableContainer = $("#chord-table-container");
  const imageContainer = $("#tablature-image-container");
  var cntLine = 1;

  Buttons.on("click", (event) => {
    const cls = event.target.className;

    switch (cls) {
      case "show-btn": {
        imageContainer.html("");
        const chordLines = $("#chord-table-container .chord-line");

        for (let i = 0; i < cntLine; i++) {
          if (i != 0) {
            const newDividerLine = $("<div class='divider-line'></div>");
            imageContainer.append(newDividerLine);
          }

          const currentChordLine = chordLines.eq(i);
          const newImageLine = $("<div class='image-line'></div>");

          for (let j = 0; j < 8; j++) {
            const currentChordInput = currentChordLine.children().eq(j);
            const chordInputValue = currentChordInput.val();

            const chordImage = $("<img class='chord-image'/>");
            if (chordInputValue == "") {
              chordImage.attr("src", "images/none.png");
            } else {
              chordImage.attr("src", "images/" + chordInputValue + ".png");
            }
            newImageLine.append(chordImage);
          }

          imageContainer.append(newImageLine);
        }
        break;
      }
      case "add-line-btn": {
        const newDividerLine = $("<div class='divider-line'></div>");
        const newChordLine = $("<div class='chord-line'></div>");

        chordTableContainer.append(newDividerLine);

        for (let i = 0; i < 8; i++) {
          const newChordInput = $("<input type='text' class='chord-input'/>");
          newChordLine.append(newChordInput);
        }

        chordTableContainer.append(newChordLine);
        cntLine++;
        Lines.text(cntLine);
        break;
      }
      case "reset-btn": {
        chordTableContainer.html("");
        imageContainer.html("");
        const newChordLine = $("<div class='chord-line'></div>");

        for (let i = 0; i < 8; i++) {
          const newChordInput = $("<input type='text' class='chord-input'/>");
          newChordLine.append(newChordInput);
        }

        chordTableContainer.append(newChordLine);
        cntLine = 1;
        break;
      }
    }
  });

  saveButton.on("click", function () {
    html2canvas(document.getElementById("tablature-image-container")).then(
      function (canvas) {
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "New Tablature.png";
        a.click();
      }
    );
  });
});
