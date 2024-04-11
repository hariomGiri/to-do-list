const form = document.getElementById('add-task-form');
const input = document.getElementById('new-task-input');
const list = document.getElementById('tasks-list');
const clearAllButton = document.getElementById('clear-all-button');
const editButton = document.getElementById('edit');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const li = document.createElement('li');
  const label = document.createElement('label');
  const clearButton = document.createElement('button');
  const editButton = document.createElement('button');
  const checkBox = document.createElement('input'); // create a new checkbox element

  checkBox.type = 'checkbox'; // set the type of the checkbox to 'checkbox'
  checkBox.addEventListener('change', function() { // add an event listener to the checkbox
    if (this.checked) {
      this.parentElement.style.backgroundColor = 'green'; // change the background color of the list item to green
    } else {
      this.parentElement.style.backgroundColor = 'white'; // change the background color of the list item to white
    }
  });

  label.textContent = input.value;
  clearButton.textContent = 'Clear';
  editButton.textContent = 'Edit';

  li.appendChild(checkBox); // append the checkbox to the list item
  li.appendChild(label);
  li.appendChild(clearButton);
  li.appendChild(editButton);
  list.appendChild(li);

  clearButton.addEventListener('click', function () {
    li.remove();
  });

  editButton.addEventListener('click', function () {
    const newText = prompt('Enter new text:');
    if (newText!== null) {
      label.textContent = newText;
    }
  })

  input.value = '';
});

clearAllButton.addEventListener('click', function () {
  list.innerHTML = '';
});