const header = document.querySelector("header");
const selectLength = header.querySelector(".langue");
const liste = document.querySelector("ul");
const inputs = document.querySelectorAll("input");

let counter = 0;

header.addEventListener("click", () => {
  header.classList.toggle("open");
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.checked) {
      counter++;
    } else {
      counter--;
    }

    selectLength.textContent = `${counter} Element Selected`;
    
    if (counter == 0) {
      selectLength.textContent = `Select Element`;
    }
  });
});
