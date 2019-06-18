function ToDoList () {
  this.items = [],
  this.currentId = 0
};

ToDoList.prototype.addItem = function (item) {
  item.id = this.assignId ();
  this.items.push(item);
  }

  ToDoList.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;

  }
  ToDoList.prototype.findItem = function(number) {
    for (var i=0; i < this.items.length; i++ ) {
      if (this.items[i]) {
        if (this.items[i].id == number) {
          return this.items[i];
        }
      }

    };
    return false;
  }
  ToDoList.prototype.deleteItem = function(number) {
    for (var i=0; i < this.items.length; i++) {
      if (this.items[i]) {
        if (this.items[i].id == number) {
          delete this.items[i];
          return true;
        };
      };
    };
    return false;
  };

// Business Logic for Contacts ---------
function ToDoItem (title, priority, dueDate) {
  this.title = title;
  this.priority = priority;
  this.dueDate = dueDate;
}

//User interface Logic ----------

var toDoList = new ToDoList();

function displayToDoDetails (toDoToDisplay) {
  var ItemsList = $('ul#items');
  var htmlForItemInfo = "";
  toDoToDisplay.items.forEach(function(item) {
    htmlForItemInfo += '<li id=' + item.id + '>' + item.title + ' </li>'
  });
  ItemsList.html(htmlForItemInfo);

};


function showItems(itemId) {
  var item = ToDoList.findItem(itemId);
  $("#item-detail").show();
  $(".title").html(item.title);
  $(".priority").html(item.priority);
  $(".due-date").html(item.dueDate);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#tasks").on("click", "li", function() {
    showItems(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};







$(document).ready(function () {
  $("#toDo").submit(function() {
    event.preventDefault();
    var inputtedTitle = $("input:text[name=title]").val();
    var inputtedPriority = $("input:text[name=priority]").val();
    var inputtedDueDate = $("input:text[name=duedate]");
    $("input:text[name=title]").val("");
    $("input:text[name=priority]").val("");
    $("input:text[name=duedate]").val("");
    var newItem = new ToDoItem (inputtedTitle, inputtedPriority, inputtedDueDate);
    toDoList.addItem(newItem);
    displayToDoDetails(toDoList);

  });

});
