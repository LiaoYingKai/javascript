$(document).on("click", "i", removeTask);
$(document).on("click", "p", editTask);
$(".all_list").click(showAllList);
$(".undone_list").click(showUndoneList);
$(".done_list").click(showDoneList);
$("input[type='text']").keydown((e) => {
  if (e.keyCode == 13) {
    let input_value = $("input[type='text']").val();
    if (!input_value) {
      alert("Please Enter Content");
      return;
    }
    addTask(input_value);
    $("input[type='text']").val("");
  }
})

function addTask(user_input) {
  let text = `
    <li>
      <input type="checkbox">
      <p>${user_input}</p>
      <i class="fas fa-times"></i>
    </li>
    `
  $("ul").append(text);
}

function removeTask() {
  $(this).parent().remove();
}

function editTask() {
  console.log("fuck");
}

function showAllList() {
  $(".list_status").children("div").removeClass("user_select_style");
  $(this).toggleClass("user_select_style");
  $("input[type='checkbox']").each(function() {
    $(this).parent().show();
  })
}

function showUndoneList() {
  $(".list_status").children("div").removeClass("user_select_style");
  $(this).toggleClass("user_select_style");
  $("input[type='checkbox']").each(function() {
    if ($(this).prop("checked")) {
      $(this).parent().hide();
    } else {
      $(this).parent().show();
    }
  })
}

function showDoneList() {
  $(".list_status").children("div").removeClass("user_select_style");
  $(this).toggleClass("user_select_style");
  $("input[type='checkbox']").each(function() {
    if ($(this).prop("checked")) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }
  })
}