const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const listGroup = document.querySelector(".list-group");
const deleteTodo = document.querySelector("#todoClearButton");

let todos = [];

runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  secondCardBody.addEventListener("click", removeTodoToUI);
  deleteTodo.addEventListener("click", clearAllTodos);
}

function addTodo(e) {
  const InputText = addInput.value.trim();
  if (InputText === null || InputText == "") {
    showAlert("warning", "Lütfen todo giriniz");
  } else {
    addTodoToUI(InputText);
    addTodoToLocalStorage(InputText);
    showAlert("success", "Todo başarıyla eklendi");
  }
  e.preventDefault();
}

function addTodoToUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  listGroup.appendChild(li);

  addInput.value = "";
}


function addTodoToLocalStorage(newTodo) {
  checkLocalStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkLocalStorage() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

function showAlert(type, message) {
  const div = document.createElement("div");
  div.className = "alert alert-" + type;
  div.textContent = message;
  firstCardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2000);
}

function removeTodoToUI(e) {
  if (e.target.className === "fa fa-remove") {
      const todoDelete=e.target.parentElement.parentElement;
      todoDelete.remove();
      removeTodoFromLocalStorage(todoDelete.textContent);
      showAlertDelete("success","Todo başarıyla silindi");
  }
}

function removeTodoFromLocalStorage(removeTodo)
{
  checkLocalStorage();
  todos.forEach(function (todo, index) {
    if (todo === removeTodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlertDelete(type, message) {
  const div = document.createElement("div");
  div.className = "alert alert-" + type;
  div.textContent = message;
  secondCardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2000);
}

function clearAllTodos(e)
{
  if(e.target.className==="btn btn-primary btn-sm mt-3")
  {
    if(todos.length===0)
    {
      showAlertDelete("warning", "Silinecek todo bulunamadı");
    }
    else
    {
      listGroup.innerHTML = "";
      removeTodoFromLocalStorage();
      checkLocalStorage();  
      todos = [];
      localStorage.setItem("todos", JSON.stringify(todos));
      showAlertDelete("success", "Tüm todo'lar başarıyla silindi");
    }
  }
}