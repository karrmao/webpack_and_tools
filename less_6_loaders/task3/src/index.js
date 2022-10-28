import { renderTasks } from './list/rendered.js';
import { setItem } from './list/storage.js';
import { getTasksList } from './list/tasksGateway.js';
import { initTodoListHandlers } from './list/todoList.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);
