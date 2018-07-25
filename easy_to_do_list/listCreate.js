var list = [];
// var text = "";
//新增
function getInputTxt() {
  var text = document.querySelector("#input_text").value;
  list.push(text);
  listToHtml();
  listOnClick();
  document.querySelector("#input_text").value = "";
}
//修改
function editList() {
  //獲得要修改的值是第幾個
  console.log(getIndex());
  var index = getIndex();
  //然後用這個數字對陣列做修改
  list[index] = document.querySelector("#input_text").value;
  //然後在重新掛上監聽事件跟重新傳回HTML
  listToHtml();
  listOnClick();
  addReset();
}
//刪除
function deleteList() {
  //獲得要刪除的值是第幾個
  var index = getIndex();
  //用splice刪除這個位置的值
  list.splice(index, 1);

  //然後在重新掛上監聽事件跟重新傳回HTML
  listToHtml();
  listOnClick();
  addReset();
}

//取消
function cancel() {

  addReset();
}

//將list輸出成ul li
function listToHtml() {
  var list_demo = "<ul>";
  for (var i = 0; i < list.length; i++) {
    list_demo = list_demo + "<li>" + list[i] + "</li>";
  }
  list_demo += "</ul>";
  document.querySelector(".list_demo").innerHTML = list_demo;
}

//將每一個li掛上監聽事件，並將點擊的li的值傳到text
function listOnClick() {
  var li_text = document.getElementsByTagName("li");
  for (var i = 0; i < list.length; i++) {
    li_text[i].onclick = function() {
      text = this.innerText;
      document.querySelector("#input_text").value = text;
      editAndDelete();
    }
  }
}

//透過將HTMLCollectoin轉成array，並知道點的是第幾個li
function getIndex() {
  var li_text = document.getElementsByTagName("li");
  var arrCollection = Array.from(li_text);
  var arr = [];
  for (var i = 0; i < arrCollection.length; i++) {
    arr.push(arrCollection[i].innerText);
  }
  return arr.indexOf(text);
}

function addReset() {
  document.querySelector("#save").style.display = "block";
  document.querySelector("#edit").style.display = "none";
  document.querySelector("#delete").style.display = "none";
  document.querySelector("#cancel").style.display = "none";
  //清除input_text的值
  document.querySelector("#input_text").value = "";
}

function editAndDelete() {
  document.querySelector("#save").style.display = "none";
  document.querySelector("#edit").style.display = "block";
  document.querySelector("#delete").style.display = "block";
  document.querySelector("#cancel").style.display = "block";
}