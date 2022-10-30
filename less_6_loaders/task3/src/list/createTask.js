import { createTask, getTasksList } from './tasksGateaway.js';
import { renderTasks } from './renderTasks.js';

export function onCreateTask() {
  const taskInput = document.querySelector('.task-input');

  const text = taskInput.value;

  if (!text) {
    return;
  }

  taskInput.value = '';

  const newTask = {
    text,
    done: false,
    changesDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(tasksList => renderTasks(tasksList));
}
