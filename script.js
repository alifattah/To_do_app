var text, input, item, div, checkIcon, trashIcon, svgIcon, getTheP;

input = document.getElementById("input");

// get input value when press the enter key
input.addEventListener("keydown", function (event) {
  // skip empty input value
  if (input.value) {
    if (event.key === "Enter") {
      addItem();
    }
  }
});

// get input value when clicking
document.querySelector("#add_item").addEventListener("click", function () {
  // skip empty input value
  if (input.value) {
    addItem();
  }
});

function addItem() {
  // Update UI: Create new to-do
  item = document.createElement("div");
  div = document.createElement("div");
  text = document.createElement("p");
  checkIcon = document.createElement("i");
  trashIcon = document.createElement("i");

  item.classList.add("item");
  text.textContent = input.value;

  // Update UI: Add check icon into new to-do
  checkIcon.classList.add("fas", "fa-check-circle");
  checkIcon.closest("i").classList.add("greencheck");
  checkIcon.addEventListener("click", function (element) {
    element.target.closest("i").classList.toggle("checkicon");
    getTheP = element.target.closest("div.item").childNodes[0].classList.toggle("greenp");
  });

  div.appendChild(checkIcon);

  // Update UI: Add trash icon into new to-do
  trashIcon.classList.add("fas", "fa-trash");
  trashIcon.closest("i").classList.add("redtrash");
  trashIcon.addEventListener("click", function (element) {
    element.target.closest("div.item").classList.add("trashicon");
    setTimeout(function(){element.target.closest("div.item").remove();}, 300);
  });


  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);

  // Update UI: the input
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
}
