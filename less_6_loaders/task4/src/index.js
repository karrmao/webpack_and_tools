import { initHandlers } from './list/initHandlers.js';
import { getTasksList } from './list/tasksGateaway.js';
import { renderTasks } from './list/renderTasks.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  initHandlers();

  getTasksList().then(tasksList => renderTasks(tasksList));
});
