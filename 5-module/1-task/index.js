/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let status = table.querySelectorAll("tr > td:last-child");
  let gender = table.querySelectorAll("tr > td:nth-child(3)");
  let age = table.querySelectorAll("tr > td:nth-child(2)");

  //Status and hidden
  for (let item of status) {
    if (item.getAttribute("data-available") === "true") {
      item.parentElement.classList.add("available");
    }
    if (item.getAttribute("data-available") === "false") {
      item.parentElement.classList.add("unavailable");
    }

    if (!item.dataset.available) {
      item.parentElement.setAttribute("hidden", true);
    }
  }

  //Gender
  for (let item of gender) {
    if (item.innerHTML == "m") {
      item.parentElement.classList.add("male");
    }

    if (item.innerHTML == "f") {
      item.parentElement.classList.add("female");
    }
  }

  //Age
  for (let item of age) {
    if (item.innerHTML < 18) {
      item.parentElement.style.textDecoration = "line-through";
    }
  }
}
