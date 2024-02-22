(function () {
  "use strict";

  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  let arrTasks = getSavedData();

  function getSavedData() {
    let tasksData = localStorage.getItem("tasks");
    tasksData = JSON.parse(tasksData);

    return tasksData && tasksData.length
      ? tasksData
      : [
          {
            name: "task1",
            createAt: Date.now(),
            completed: false,
          },
        ];
  }

  function setNewData() {
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }

  setNewData();

  function generateLiTask(obj) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkButton = document.createElement("button");
    const editButton = document.createElement("i");
    const deleteButton = document.createElement("i");
    const contaienerEdit = document.createElement("div");
    const inputEdit = document.createElement("input");
    const containerEditButton = document.createElement("button");
    const containerCancelButton = document.createElement("button");

    checkButton.setAttribute("data-action", "checkButton");
    editButton.setAttribute("data-action", "editButton");
    deleteButton.setAttribute("data-action", "deleteButton");
    containerEditButton.setAttribute("data-action", "containerEditButton");
    containerCancelButton.setAttribute("data-action", "containerCancelButton");

    contaienerEdit.className = "editContainer";
    inputEdit.setAttribute("type", "text");
    inputEdit.className = "editInput";
    inputEdit.value = obj.name;
    contaienerEdit.appendChild(inputEdit);
    containerEditButton.className = "editButton";
    containerEditButton.textContent = "edit";
    contaienerEdit.appendChild(containerEditButton);
    containerCancelButton.className = "cancelButton";
    containerCancelButton.textContent = "Cancel";
    contaienerEdit.appendChild(containerCancelButton);

    li.appendChild(contaienerEdit);

    li.className = "todo-item";
    checkButton.className = "button-check";
    checkButton.innerHTML = `
      <i class="fas fa-check ${
        obj.completed ? "" : "displayNone"
      }" data-action="checkButton"></i>
    `;
    li.appendChild(checkButton);
    p.className = "task-name";
    p.textContent = obj.name;
    li.appendChild(p);

    editButton.className = "fas fa-edit";
    li.appendChild(editButton);

    deleteButton.className = "fas fa-trash-alt";
    li.appendChild(deleteButton);

    return li;
  }

  function renderTasks() {
    ul.innerHTML = "";
    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj));
    });
  }

  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false,
    });
    setNewData();
  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // ul.innerHTML += `
    // <li class="todo-item">
    // <p class="task-name">${itemInput.value}</p>
    // </li>
    // `;
    addTask(itemInput.value);
    renderTasks();
    itemInput.value = "";
    itemInput.focus();
  });

  function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action");

    if (!dataAction) return;

    let currentLi = e.target;
    while (currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }

    const currentLiIndex = [...lis].indexOf(currentLi);

    const actions = {
      editButton: function () {
        const editContainer = currentLi.querySelector(".editContainer");
        const input = currentLi.querySelector(".editInput");
        [...ul.querySelectorAll(".editContainer")].forEach((container) => {
          container.removeAttribute("style");
        });
        editContainer.style.display = "flex";
        input.setSelectionRange(0, input.value.length);
        input.focus();
      },
      deleteButton: function () {
        arrTasks.splice(currentLiIndex, 1);
        renderTasks();
        setNewData();
      },
      containerEditButton: function () {
        const val = currentLi.querySelector(".editInput").value;
        arrTasks[currentLiIndex].name = val;
        renderTasks();
        setNewData();
      },
      containerCancelButton: function () {
        currentLi.querySelector(".editContainer").removeAttribute("style");
      },
      checkButton: function () {
        arrTasks[currentLiIndex].completed =
          !arrTasks[currentLiIndex].completed;
        // if (arrTasks[currentLiIndex].completed) {
        //   currentLi.querySelector(".fa-check").classList.remove("displayNone");
        // } else {
        //   currentLi.querySelector(".fa-check").classList.add("displayNone");
        // }
        setNewData();
        renderTasks();
      },
    };

    if (actions[dataAction]) {
      actions[dataAction]();
    }
  }

  ul.addEventListener("click", clickedUl);

  renderTasks();
})();
