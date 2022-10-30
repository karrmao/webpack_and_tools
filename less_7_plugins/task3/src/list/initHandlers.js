import { getTasksList } from './tasksGateaway.js';
import { renderTasks } from './renderTasks.js';
import { onCreateTask } from './createTask.js';
import { onListClick } from './onListClick.js';

export function initHandlers() {
  getTasksList().then(tasksList => renderTasks(tasksList));
  const createButton = document.querySelector('.create-task-btn');
  createButton.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
}
