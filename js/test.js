// Get all the cells in the table
const cells = document.querySelectorAll("td");

// Add event listeners to each cell for drag and drop
cells.forEach((cell) => {
  cell.setAttribute("draggable", true);

  cell.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  cell.addEventListener("dragover", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.tagName === "TD") {
      const source = document.getElementById(
        e.dataTransfer.getData("text/plain")
      );
      const sourceRect = source.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      if (e.clientY - targetRect.top > targetRect.height / 2) {
        target.parentNode.insertBefore(source, target.nextElementSibling);
      } else {
        target.parentNode.insertBefore(source, target);
      }
    }
  });
});
