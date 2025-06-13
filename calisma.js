const form=document.querySelector("#todoAddForm");
const todoList=document.querySelector(".list-group");
const InputTodo=document.querySelector("#todoName");


runEvents();

function runEvents(){
    form.addEventListener("submit", addTodo);
}

function addTodo(e){
    const inputText=InputTodo.value.trim();
    if(inputText==null || inputText==""){
        alert("lütfen geçerli bir todo giriniz.");
    }
    else{
        addTodoToUI(inputText);
    }
    e.preventDefault();
}

function addTodoToUI(newTodo){
    // <!-- <li class="list-group-item d-flex justify-content-between">Todo 1
    //                         <a href="#" class="delete-item">
    //                             <i class="fa fa-remove"></i>
    //                         </a>
    //                     </li>
    const li=document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent=newTodo;

    const a=document.createElement("a");
    a.className="delete-item";
    a.href="#";

    const i=document.createElement("i");
    i.className="fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
}