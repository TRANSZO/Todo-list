// const todoForm = document.querySelector("#todoform");
const textTodo = document.getElementById("textinput");
const inputBtn = document.getElementById("btn");
const addTodoList = document.querySelector(".addtodolist");

textTodo.addEventListener("keyup", (e) => {
    if (textTodo.value === " ") {
        inputBtn.disabled = true;
    } else {
        inputBtn.disabled=false
    }
})
inputBtn.addEventListener("click", (e) => {
    const value = textTodo.value;
    const addtodo = document.createElement("li");
addtodo.innerHTML = `<span class="parag"> ${value} </span>
<div class="btnparent">
    <button class="addbtn done">done</button>
    <button class="remvbtn remove">remove</button>
</div>`;
    addTodoList.append(addtodo);
    textTodo.value = "";
    inputBtn.disabled = true;
})

// console.log(addtodo)

addTodoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const newremove = e.target.parentNode.parentNode;
        newremove.remove();
    } else if (e.target.classList.contains("done")) {
        const newdone = e.target.parentNode.previousElementSibling;
        newdone.style.textDecoration = "line-through"
        }
})

