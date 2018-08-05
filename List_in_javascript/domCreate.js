var value_text;
createList();

function createList() {
  let list_node = document.createElement("ul");
  let parent_node = document.querySelector(".list_demo");
  parent_node.appendChild(list_node);
}

function newListTask() {
  let user_input = document.querySelector("#input_text").value;
  let user_input_node = document.createTextNode(user_input);
  let li_node = document.createElement("li");
  li_node.appendChild(user_input_node);
  let parent_node = document.getElementsByTagName("ul")[0];
  parent_node.appendChild(li_node);
  document.querySelector("#input_text").value = "";
  li_node.onclick = function() {
    value_text = this;
    document.querySelector("#input_text").value = this.innerHTML;
    modifyMode();
  }
}

function editListTack() {
  let user_input = document.querySelector("#input_text").value;
  let edit_text_node = document.createTextNode(user_input);
  let li_node = document.createElement("li");
  li_node.appendChild(edit_text_node);
  let parent_node = document.getElementsByTagName("ul")[0];
  parent_node.replaceChild(li_node, value_text);
  li_node.onclick = function() {
    value_text = this;
    document.querySelector("#input_text").value = this.innerHTML;
    modifyMode();
  }
  inputMode();
}

function deleteListTask() {
  let parent_node = document.getElementsByTagName("ul")[0];
  parent_node.removeChild(value_text);
  inputMode();
}

function doNoThing() {
  inputMode();
}

function modifyMode() {
  document.querySelector("#edit").style.display = "block";
  document.querySelector("#cancel").style.display = "block";
  document.querySelector("#delete").style.display = "block";
  document.querySelector("#save").style.display = "none";
}

function inputMode() {
  document.querySelector("#edit").style.display = "none";
  document.querySelector("#cancel").style.display = "none";
  document.querySelector("#delete").style.display = "none";
  document.querySelector("#save").style.display = "block";
  document.querySelector("#input_text").value = "";
}