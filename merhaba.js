// // HTML Elementleri Üzerinde Gezinmek.

// const todo = document.querySelector(".list-group-item");
// const todoList = document.querySelector(".list-group");
// const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// // const card = document.getElementsByClassName("card")[0];
// const card = document.querySelector(".card");
// const row = document.querySelector(".row");

// console.log(window);

// // let value;

// //Anneden çocuklara erişmek

// // value = todoList;
// // value = todoList.children[0];
// // value = todoList.children[3];
// // value = todoList.children[todoList.children.length-1];
// // value = todoList.children[3].textContent = "Değişti";

// // value = Array.from(todoList.children);

// // value.forEach(function(todo){
// //     console.log(todo.textContent);
// // })



// //Çocuktan Anneye Erişmek

// // value = todo;
// // let ul  = todo.parentElement;
// // let cardBody = ul.parentElement;
// // let cardElement = cardBody.parentElement;
// // // let row = cardElement.parentElement;
// // let container = row.parentElement;


// // // Kardeşler arasında gezinmek
// // value = todo;
// // value = todo.nextElementSibling.nextElementSibling.nextElementSibling;


// // value = todoLastChild;
// // value = todoLastChild.previousElementSibling.previousElementSibling
// // .previousElementSibling.nextElementSibling.previousElementSibling
// // .previousElementSibling;


// // value = row.children[0].children[3].children[0].textContent="Todo Listesi Başlığı Değişti";

// // value=todoList.children[1];

// // value.textContent="Yeni Todo";
// // value.style.backgroundColor="red";
// // value.style.color="yellow";

// // const todoelement=document.querySelectorAll(".card-body")[1];
// // console.log(todoelement);

// // const butonlink= document.createElement("a");
// // butonlink.className= "btn btn-danger btn-sm sm-2 ml-2 mt-3 p-2";
// // butonlink.id= "todo-delete";
// // butonlink.href="https://emrhn1.github.io/";
// // butonlink.target="_blank";
// // butonlink.innerHTML="Kişisel websiteme git";
// // todoelement.appendChild(butonlink);

// /*<li class="list-group-item d-flex justify-content-between">Todo 1
//                             <a href="#" class="delete-item">
//                                 <i class="fa fa-remove"></i>
//                             </a>
//                         </li> */
// // const li=document.createElement("li");
// // li.className="list-group-item d-flex justify-content-between";
// // li.innerHTML="Todo 5";
// // li.style.backgorundColor="red";
// // todoList.appendChild(li);

// // todoList.removeChild(todoList.children[todoList.children.length-1]);
// // ...........................................................................//


// // 1.yöntem

// // const addbuton=document.querySelector("#todoAddButton");

// // addbuton.addEventListener("click",function(){
// //     alert("yeni todo eklendi.");
// // })


// // 2.yöntem

// // const newContent=document.querySelector("#todoAddButton");

// // newContent.addEventListener("click",addTodo);

// // function addTodo(e){
// //    console.log(e.type);
// // }

// // const clearbuton=document.querySelector("#todoClearButton");
// // clearbuton.addEventListener("dblclick",run);

// // function run(){
// //     document.querySelectorAll(".card-title")[1].textContent="tüm todo'lar silindi.";
    
// // }

// // const mouseover=document.querySelectorAll(".card-body")[1];
// // mouseover.addEventListener("mouseover",run);

// //mouseleave
// // mouseover.addEventListener("mouseleave",run);

// //mouseenter
// // mouseover.addEventListener("mouseenter",run);

// // function run(e){
// //     console.log(e.type);
// // }

// // key eventleri
// // const input=document.querySelector("#todoAddInput");
// // input.addEventListener("keydown",run);
// // input.addEventListener("keyup",run);
// // input.addEventListener("keypress",run);

// // const input=document.querySelector("#todoName");
// // input.addEventListener("keypress",run);

// // function run(e){
// //     alert(e.target.value);
// // }