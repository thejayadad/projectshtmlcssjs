const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const task = todoInput.value.trim();
  
  if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    li.appendChild(deleteButton);
    
    todoList.appendChild(li);
    todoInput.value = '';
  }
});

todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.remove();
  }
});
