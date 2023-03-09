const showButton = document.querySelector(".show-btn");
const addLineButton = document.querySelector(".add-line-btn");
const resetButton = document.querySelector(".reset-btn");
const saveButton = document.querySelector(".save-btn");
const chordTableContainer = document.getElementById("chord-table-container");
const imageContainer = document.getElementById("tablature-image-container");
var cntLine = 1;

showButton.addEventListener("click", function () {
  imageContainer.innerHTML = "";
  const chordLines = document.querySelectorAll(
    "#chord-table-container .chord-line"
  );

  for (let i = 0; i < cntLine; i++) {
    if (i != 0) {
      const newDividerLine = document.createElement("div");
      newDividerLine.classList.add("divider-line");
      imageContainer.appendChild(newDividerLine);
    }

    const currentChordLine = chordLines[i];
    const newImageLine = document.createElement("div");
    newImageLine.classList.add("image-line");

    for (let j = 0; j < 8; j++) {
      const currentChordInput = currentChordLine.children[j];
      const chordInputValue = currentChordInput.value;

      const chordImage = document.createElement("img");
      chordImage.classList.add("chord-image");
      if (chordInputValue == "") {
        chordImage.src = "images/none.png";
      } else {
        chordImage.src = "images/" + chordInputValue + ".png";
      }

      newImageLine.appendChild(chordImage);
    }

    imageContainer.appendChild(newImageLine);
  }
});

addLineButton.addEventListener("click", function () {
  const newDividerLine = document.createElement("div");
  newDividerLine.classList.add("divider-line");
  const newChordLine = document.createElement("div");
  newChordLine.classList.add("chord-line");

  chordTableContainer.appendChild(newDividerLine);

  for (let i = 0; i < 8; i++) {
    const newChordInput = document.createElement("input");
    newChordInput.type = "text";
    newChordInput.classList.add("chord-input");
    newChordLine.appendChild(newChordInput);
  }

  chordTableContainer.appendChild(newChordLine);
  cntLine++;
});

resetButton.addEventListener("click", function () {
  chordTableContainer.innerHTML = "";
  imageContainer.innerHTML = "";
  const newChordLine = document.createElement("div");
  newChordLine.classList.add("chord-line");

  for (let i = 0; i < 8; i++) {
    const newChordInput = document.createElement("input");
    newChordInput.type = "text";
    newChordInput.classList.add("chord-input");
    newChordLine.appendChild(newChordInput);
  }

  chordTableContainer.appendChild(newChordLine);
  cntLine = 1;
});

saveButton.addEventListener("click", function () {
  html2canvas(document.getElementById("tablature-image-container")).then(
    function (canvas) {
      var el = document.createElement("a");
      el.href = canvas.toDataURL("image/png");
      el.download = "New Tablature.png"; //다운로드 할 파일명 설정
      el.click();
    }
  );
});
