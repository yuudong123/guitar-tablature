$(function () {
  const containerChordInput = $("#container-chord-input");
  const containerImage = $("#container-image");
  const buttons = $(".buttons");
  const setInputNumber = $(".set-input-number");
  const setLineNumber = $(".set-line-number");
  var cntLine = $(".cnt-line").val();
  var cntInputVal = $(".cnt-input").val();
  const showCntInput = $(".show-cnt-input");
  const showCntLine = $(".show-cnt-line");
  showCntInput.text(cntInputVal);

  buttons.on("click", (event) => {
    const cls = event.target.className;
    cntLine = $(".cnt-line").val();
    cntInputVal = $(".cnt-input").val();

    switch (cls) {
      case "btn-show": {
        const tabTitle = $("#tab-title");
        containerImage.html("");
        containerImage.append(tabTitle);

        const chordLines = $("#container-chord-input .chord-line");

        for (let i = 0; i < cntLine; i++) {
          if (i != 0) {
            const newDividerLine = $("<div class='divider-line'></div>");
            containerImage.append(newDividerLine);
          }

          const currentChordLine = chordLines.eq(i);
          const newImageLine = $("<div class='image-line'></div>");

          for (let j = 1; j <= cntInputVal; j++) {
            const currentChordInput = currentChordLine.children().eq(j).children().val();
            const chordImage = $("<img class='chord-image'/>");
            if (currentChordInput == "") {
              chordImage.attr("src", "images/none.png");
            } else {
              const encodedChordInput = encodeURIComponent(currentChordInput.replace("Ab", "G%23").replace("Bb", "A%23").replace("Cb", "B").replace("Db", "C%23").replace("Eb", "D%23").replace("Fb", "E").replace("Gb", "F%23").replace("A#", "A%23").replace("B#", "C").replace("C#", "C%23").replace("D#", "D%23").replace("E#", "F").replace("F#", "F%23").replace("G#", "G%23"));
              chordImage.attr("src", "images/" + encodedChordInput + ".png");
            }
            newImageLine.append(chordImage);
          }

          containerImage.append(newImageLine);
        }
        break;
      }
      case "btn-reset": {
        containerChordInput.html("");
        const tabTitle = $("#tab-title");
        containerImage.html("");
        containerImage.append(tabTitle);
        cntLine = 0;
        $(".btn-line-up").click();
        cntInputVal = 8;
        break;
      }
      case "btn-download": {
        html2canvas(document.getElementById("container-image")).then(function (canvas) {
          var a = document.createElement("a");
          a.href = canvas.toDataURL("image/png");
          a.download = "New Tablature.png";
          a.click();
        });
        break;
      }
    }
    $(".cnt-line").attr("value", cntLine);
    $(".cnt-input").attr("value", cntInputVal);
  });

  setInputNumber.on("click", (event) => {
    const cls = event.target.className;
    cntInputVal = $(".cnt-input").val();
    switch (cls) {
      case "btn-input-up": {
        cntInputVal++;
        $(".chord-line").each(function () {
          $('<div class="cell"><input type="text" value="" /></div>').insertBefore($(this).children(".btn-del-line"));
        });
        break;
      }
      case "btn-input-down": {
        cntInputVal--;
        $(".chord-line").each(function () {
          $(this).children(".cell").last().remove();
        });
        break;
      }
    }

    if (cntInputVal >= 16) {
      $(".btn-input-up").attr("disabled", true);
    } else if (cntInputVal <= 1) {
      $(".btn-input-down").attr("disabled", true);
    } else {
      $(".btn-input-down").removeAttr("disabled");
      $(".btn-input-up").removeAttr("disabled");
    }
    showCntInput.text(cntInputVal);
    $(".cnt-input").attr("value", cntInputVal);
  });

  setLineNumber.on("click", (event) => {
    const cls = event.target.className;
    cntInputVal = $(".cnt-input").val();
    switch (cls) {
      case "btn-line-up": {
        const newChordLine = $("<div class='chord-line'></div>");
        const newHandle = $("<div class='handle'>||</div>");
        const newDelBtn = $('<button class="btn-del-line">&times;</button>');

        newChordLine.append(newHandle);
        for (let i = 0; i < cntInputVal; i++) {
          const newChordInput = $("<div class='cell'><input type='text' value='' class='ipt'/></div>");
          newChordLine.append(newChordInput);
        }
        newChordLine.append(newDelBtn);
        $(".btn-del-line").click(function () {
          $(this).parent().remove();
        });
        containerChordInput.append(newChordLine);

        cntLine++;
        break;
      }
      case "btn-line-down": {
        $(".chord-line").last().remove();
        cntLine--;
        break;
      }
    }

    if (cntLine <= 1) {
      $(".btn-line-down").attr("disabled", true);
    } else {
      $(".btn-line-down").removeAttr("disabled");
      $(".btn-line-up").removeAttr("disabled");
    }
    showCntLine.text(cntLine);
    $(".cnt-line").attr("value", cntLine);
  });
  $(".btn-line-up").click();
  $(".btn-line-down").attr("disabled", true);
});
