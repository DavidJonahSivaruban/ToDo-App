const tasks = []; //declare an array for the tasks to be store

function addTask() {
  const addNewTask = prompt('Add New Task');

  tasks.push(addNewTask);
  alert('Task Added!');
}

function viewTask() {
  let taskList = 'Tasks:\n';
  for (task of tasks) {
    taskList += `- ${task}\n`;
  }

  alert(taskList);
}
