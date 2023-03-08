const showButton = document.querySelector(".show-btn");
const addLineButton = document.querySelector(".add-line-btn");
const resetButton = document.querySelector(".reset-btn");
const chordTableContainer = document.getElementById("chord-table-container");
const imageContainer = document.getElementById("tablature-image-container");

showButton.addEventListener("click", function () {
  imageContainer.innerHTML = "";
  const chordInputs = document.querySelectorAll(".chord-input");

  const newImageLine = document.createElement("div");
  newImageLine.classList.add("image-line");

  chordInputs.forEach(function (chordInput) {
    const chordImage = document.createElement("img");
    chordImage.classList.add("chord-image");
    if (chordInput.value == "") {
      chordImage.src = "images/none.jpg";
    } else {
      chordImage.src = "images/" + chordInput.value + ".jpg";
    }
    newImageLine.appendChild(chordImage);
  });

  imageContainer.appendChild(newImageLine);
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
});
