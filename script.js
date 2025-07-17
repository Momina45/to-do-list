const input = document.getElementById("task");
const addbtn = document.getElementById("addbtn");
const msg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");

addbtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    msg.textContent = "";
    if (taskText === "") {
        msg.textContent = "Task canot be empty";
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit your task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
        }
    });
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    dltBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });
    actions.appendChild(editBtn);
    actions.appendChild(dltBtn);

    li.appendChild(actions);
    taskList.appendChild(li);
    input.value = "";
});