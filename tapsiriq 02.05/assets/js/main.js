const lengthInput = document.querySelector("#lengthInput");
const widthInput = document.querySelector("#widthInput");
const colorInput = document.querySelector("#colorInput");
const xInput = document.querySelector("#xInput");
const yInput = document.querySelector("#yInput");
const createButton = document.querySelector("#createButton");
const block = document.querySelector("#block");

createButton.addEventListener("click", function() {
    block.style.width = widthInput.value + "px";
    block.style.height = lengthInput.value + "px";
    block.style.backgroundColor = colorInput.value;
    block.style.left = leftInput.value + "px";
    block.style.top = topInput.value + "px";
  });
  