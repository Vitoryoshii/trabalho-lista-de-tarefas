let inputTaskNew = document.querySelector("#inputTaskNew");
let btnAddTask = document.querySelector("#btnAddTask");
let taskList = document.querySelector("#taskList");
let editWindon = document.querySelector("#editWindon");
let WindonEditBackgroud = document.querySelector("#WindonEditBackgroud");
let btnWindonEditClose = document.querySelector("#btnWindonEditClose");
let btnTaskUpdate = document.querySelector("#btnTaskUpdate");
let editTaskID = document.querySelector("#editTaskID");
let inputEditTaskName = document.querySelector("#inputTaskEditName");

inputTaskNew.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let task = {
      nome: inputTaskNew.value,
      id: generateId(),
    };
    addTask(task);
  }
});

btnWindonEditClose.addEventListener("click", (e) => {
  changeEditWindon();
});

btnAddTask.addEventListener("click", (e) => {
  let task = {
    nome: inputTaskNew.value,
    id: generateId(),
  };
  addTask(task);
});

btnTaskUpdate.addEventListener("click", (e) => {
  let taskId = editTaskID.innerHTML.replace("#", "");

  let task = {
    nome: inputEditTaskName.value,
    id: taskId,
  };

  let currentTask = document.getElementById("" + taskId + "");

  if (currentTask) {
    let li = createTagLI(task);
    taskList.replaceChild(li, currentTask);
    changeEditWindon();
  }
});

function generateId() {
  return Math.floor(Math.random() * 3000);
}

function addTask(task) {
  let li = createTagLI(task);
  taskList.appendChild(li);
  inputTaskNew.value = "";
}

function createTagLI(task) {
  let li = document.createElement("li");
  li.id = task.id;

  let span = document.createElement("span");
  span.classList.add("textTask");
  span.innerHTML = task.nome;

  let div = document.createElement("div");

  let btnEdit = document.createElement("button");
  btnEdit.classList.add("btnAction");
  btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
  btnEdit.setAttribute("onclick", "edit(" + task.id + ")");

  let btnDelete = document.createElement("button");
  btnDelete.classList.add("btnAction");
  btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
  btnDelete.setAttribute("onclick", "del(" + task.id + ")");

  div.appendChild(btnEdit);
  div.appendChild(btnDelete);

  li.appendChild(span);
  li.appendChild(div);
  return li;
}

function edit(taskId) {
  let li = document.getElementById("" + taskId + "");
  if (li) {
    editTaskID.innerHTML = "#" + taskId;
    inputEditTaskName.value = li.innerText;
    changeEditWindon();
  }
}

function del(taskId) {
  let li = document.getElementById("" + taskId + "");
  if (li) {
    taskList.removeChild(li);
  }
}

function changeEditWindon() {
  editWindon.classList.toggle("open");
  WindonEditBackgroud.classList.toggle("open");
}
