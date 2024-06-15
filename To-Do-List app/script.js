document.addEventListener('DOMContentLoaded', function() {
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    addTaskBtn.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.addEventListener('click', function() {
            completeTask(listItem);
        });

        listItem.appendChild(completeBtn);
        taskList.appendChild(listItem);
    }

    function completeTask(listItem) {
        taskList.removeChild(listItem);
        listItem.removeChild(listItem.querySelector('.complete-btn'));
        completedTaskList.appendChild(listItem);
    }
});