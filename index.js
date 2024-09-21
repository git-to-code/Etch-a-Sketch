const container = document.querySelector(".container");
let squares = 16;
createGrid();
function createGrid() {
  container.innerHTML = "";
  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList = "gridItem";
      gridItem.style.width = "calc(50vw /" + squares + ")";
      gridItem.style.height = "calc(50vw /" + squares + ")";
      container.appendChild(gridItem);
    }
  }
}

const button = document.querySelector("#squares");

button.addEventListener("click", () => {
  let getSquares = prompt(
    "Please enter the number of squares per side(not more than 100)"
  );
  if (getSquares && getSquares <= 100) {
    squares = parseInt(getSquares, 10);
    createGrid();
  }
});
