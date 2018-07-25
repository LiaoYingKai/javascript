//先將需要有點擊效果的元素套上效果
window.onload = function() {
  var add_task = document.querySelector("#add_new_task");
  add_task.onclick = function() {

  }

  var save = document.querySelector(".add");
  save.onclick = function() {
    if (save.innerText == "+ Add Task") {
      getList();
    } else {
      editList();
    }
  }
  var cancel = document.querySelector(".cancel");
  cancel.onclick = function() {
    document.querySelector(".add_task").style.height = "76px";
  }
  var important_status = document.querySelector(".fa-star");
  important_status.onclick = function() {
    //點了會重新排序
  }
  var edit = document.querySelector(".fa-pen");
  edit.onclick = function() {
    document.querySelector(".add_task").style.height = "525.5px";
    save.innerHTML = "+ Save";
  }
}
//建立一個空的陣列存放東西
var list = [];
//將列表的事項傳入陣列
function getList() {
  //抓html的值
  var statu = document.querySelector("#important_check").checked;
  var date = document.querySelector(".date").value;
  var time = document.querySelector(".time").value;
  var list_content = document.querySelector(".list_content").value;
  //放入陣列
  list.push({
    "statu": statu,
    "date": date,
    "time": time,
    "list_content": list_content
  })
  console.log(list);
  //存放後將他收起來
  document.querySelector(".add_task").style.height = "76px";
}
//修改陣列
function editList() {
  list[0].statu = document.querySelector("#important_check").checked;
  list[0].date = document.querySelector(".date").value;
  list[0].time = document.querySelector(".time").value;
  list[0].list_content = document.querySelector(".list_content").value;
  document.querySelector(".add_task").style.height = "76px";

}