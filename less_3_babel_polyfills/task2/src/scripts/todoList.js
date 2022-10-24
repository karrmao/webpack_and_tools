import { onListClick } from './updateTask.js';
import { onCreateTask } from './createTask.js';

export const initTodoListHandlers = () => {
  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
};
