var value_text;
// window.onload = function() {
createUlNode();
// }
//建立一個ul節點，讓接下來的li有父節點可以參考
function createUlNode() {
  let list_demo = document.createElement("ul");
  let parent_node = document.querySelector(".list_demo");
  parent_node.appendChild(list_demo);
}
//新增
function getInputTxt() {
  //取得使用者輸入時，將使用者輸入的文字轉成文字節點
  let text = document.querySelector("#input_text").value;
  let text_node = document.createTextNode(text);
  //放到li節點裡
  let new_node = document.createElement("li");
  new_node.appendChild(text_node);
  //單擊呼叫修改模式，並將值傳回input_text方便修改與刪除
  new_node.onclick = function() {
    value_text = this;
    document.querySelector("#input_text").value = this.innerHTML;
    editAndDelete();
  }
  //放到ul節點裡
  let parent_node = document.getElementsByTagName("ul")[0];
  parent_node.appendChild(new_node);
  document.querySelector("#input_text").value = "";
}
//修改值
function editList() {
  //取得修改後的值放入節點
  let text = document.querySelector("#input_text").value;
  let text_node = document.createTextNode(text);
  //放到li節點裡
  let new_node = document.createElement("li");
  new_node.appendChild(text_node);

  let parent_node = document.getElementsByTagName("ul")[0];
  //刪除原本的貼上新的
  parent_node.replaceChild(new_node, value_text);
  addReset();
}
//刪除值
function deleteList() {
  let parent_node = document.getElementsByTagName("ul")[0];
  parent_node.removeChild(value_text);
  addReset();
}
//取消不做事
function cancel() {
  addReset();
}
//修改模式
function editAndDelete() {
  document.querySelector("#edit").style.display = "block";
  document.querySelector("#cancel").style.display = "block";
  document.querySelector("#delete").style.display = "block";
  document.querySelector("#save").style.display = "none";
}
//恢復預設的輸入模式
function addReset() {
  document.querySelector("#edit").style.display = "none";
  document.querySelector("#cancel").style.display = "none";
  document.querySelector("#delete").style.display = "none";
  document.querySelector("#save").style.display = "block";
  document.querySelector("#input_text").value = "";
}