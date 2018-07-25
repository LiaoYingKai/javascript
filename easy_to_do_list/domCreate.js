var value_text;
createList();

//建立一個ul節點，讓接下來的li有父節點可以參考
function createList() {
  let list_node = document.createElement("ul");
  let parent_node = document.querySelector(".list_demo");
  parent_node.appendChild(list_node);
}
//新增
function newListTask() {
  //取得使用者輸入時，將使用者輸入的文字轉成文字節點
  let user_input = document.querySelector("#input_text").value;
  let user_input_node = document.createTextNode(user_input);
  //放到li節點裡
  let li_node = document.createElement("li");
  li_node.appendChild(user_input_node);
  //放到ul節點裡
  let parent_node = document.getElementsByTagName("ul")[0];
  parent_node.appendChild(li_node);
  document.querySelector("#input_text").value = "";
  //單擊呼叫修改模式，並將值傳回input_text方便修改與刪除
  li_node.onclick = function() {
    value_text = this;
    document.querySelector("#input_text").value = this.innerHTML;
    modifyMode();
  }
}
//修改值
function editListTack() {
  //取得修改後的值放入節點
  let edit_text = document.querySelector("#input_text").value;
  let edit_text_node = document.createTextNode(edit_text);
  //放到li節點裡
  let li_node = document.createElement("li");
  li_node.appendChild(edit_text_node);

  let parent_node = document.getElementsByTagName("ul")[0];
  //刪除原本的貼上新的
  parent_node.replaceChild(li_node, value_text);
  li_node.onclick = function() {
    value_text = this;
    document.querySelector("#input_text").value = this.innerHTML;
    modifyMode();
  }
  inputMode();
}
//刪除值
function deleteListTask() {
  let parent_node = document.getElementsByTagName("ul")[0];
  parent_node.removeChild(value_text);
  inputMode();
}

function doNoThing() {
  inputMode();
}
//修改模式
function modifyMode() {
  document.querySelector("#edit").style.display = "block";
  document.querySelector("#cancel").style.display = "block";
  document.querySelector("#delete").style.display = "block";
  document.querySelector("#save").style.display = "none";
}
//輸入模式
function inputMode() {
  document.querySelector("#edit").style.display = "none";
  document.querySelector("#cancel").style.display = "none";
  document.querySelector("#delete").style.display = "none";
  document.querySelector("#save").style.display = "block";
  document.querySelector("#input_text").value = "";
}