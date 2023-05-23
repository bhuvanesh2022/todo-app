// Open the default tab
document.getElementById('tab1').style.display = 'block';

function openTab(event, tabName) {
  // Hide all tab contents
  const tabContents = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = 'block';
}

function addTask(tabNumber) {
  const taskInput = document.getElementById(`taskInput${tabNumber}`);
  const todoList = document.getElementById(`todoList${tabNumber}`);

  // Create a new task item
  const taskText = taskInput.value;
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText;

  // Append the task item to the todo list
  todoList.appendChild(taskItem);
  

  // Clear the task input
  taskInput.value = '';
}