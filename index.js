const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

// console.log(placeholders);

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  //   console.log(placeholder);
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"));
}

function dragend(event) {
  event.target.className = "item";
}

function dragover(event) {
  //   console.log("drar-over");
  event.preventDefault();
}

function dragenter(event) {
  //   console.log("drar-enter");
  event.target.classList.add("hovered");
}

function dragleave(event) {
  //   console.log("drar-leave");
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  //   console.log("drar-drop");
  event.target.classList.remove("hovered");
  event.target.append(item);
}
