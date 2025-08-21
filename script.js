const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button onclick="toggleComplete(this)">✅</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const taskItem = button.closest("li");
  taskItem.remove();
}

function toggleComplete(button) {
  const taskItem = button.closest("li");
  taskItem.classList.toggle("completed");
}
