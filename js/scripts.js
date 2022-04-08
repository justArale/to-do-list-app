function newItem(){
  
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    list.append(li);
  }
    
  //2. Crossing out an item from the list of items:
  function crossOut(){
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);
  

  //3(i). Adding the delete button "X": 
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(crossOutButton);

  function deleteListItem(){
    li.addClass('delete')
  }

  crossOutButton.on('click', deleteListItem)

}

// 4. Reordering the items: 
$('#list').sortable();

  

