let input_field = document.querySelector(".input");
const button = document.querySelector("#button");
let list = document.querySelector(".list-items");

let todoList = [];
let getTodoList = () => {
  return JSON.parse(localStorage.getItem("todoElement")) || [];
};
const addElementToStorage = (todo) => {
  return localStorage.setItem("todoElement", JSON.stringify(todo));
};
const showTodoList = () => {
  todoList = getTodoList();
  todoList.forEach((currList) => {
    let liElement = document.createElement("li");
    liElement.innerHTML = currList;
    list.append(liElement);
    liElement.style.color = " white";
    liElement.style.fontSize = " 1.8rem";
    liElement.style.marginTop = " 1.5rem";
  });
};

const removeTodoList = (e) => {
  let remove_element = e.target;
  updated_list = todoList.filter(
    (currTodoList) => currTodoList != remove_element.textContent
  );
  addElementToStorage(updated_list);
  remove_element.remove();
};
function addTodoList() {
  let newTodo = input_field.value.trim();
  input_field.value = "";
  if (newTodo.length !== 0 && !todoList.includes(newTodo)) {
    todoList.push(newTodo);

    let liElement = document.createElement("li");
    liElement.innerHTML = newTodo;
    list.append(liElement);
    liElement.style.color = " white";
    liElement.style.fontSize = " 1.8rem";
    liElement.style.marginTop = " 1.5rem";
  }
}
showTodoList();
button.addEventListener("click", () => {
  addTodoList();
});
list.addEventListener("click", (e) => {
  removeTodoList(e);
});
