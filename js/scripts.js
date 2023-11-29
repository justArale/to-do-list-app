function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = $("#list");
    list.append(li);
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  //3(i). Adding the delete button "X":
  let crossOutButton = $("<crossOutButton>X</crossOutButton>");
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete");
  }

  crossOutButton.on("click", deleteListItem);

  //4. delete inputfield after submit
  let input1 = document.getElementById("input");
  input1.value = "";
}

// 4. Reordering the items:
$("#list").sortable();

// add item with enter and prevent page from reloading
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    newItem();
  }
});
