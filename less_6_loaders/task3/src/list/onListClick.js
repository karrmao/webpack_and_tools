import { renderTasks } from './renderTasks.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateaway.js';

function toggleTask(taskId, event, done) {
  const text = event.target.closest('li').childNodes[1].textContent;
  const toggledTask = { text, done, changesDate: new Date() };

  updateTask(taskId, toggledTask)
    .then(() => getTasksList())
    .then(tasksList => {
      renderTasks(tasksList);
    });
}

function deleteListItem(taskId) {
  deleteTask(taskId)
    .then(() => getTasksList())
    .then(tasksList => {
      renderTasks(tasksList);
    });
}

export function onListClick(event) {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  const isDeleteBtn = event.target.classList.contains('list__item-delete-btn');

  if (!isDeleteBtn && !isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;

  if (isDeleteBtn) {
    deleteListItem(taskId);

    return;
  }

  const done = event.target.checked;

  toggleTask(taskId, event, done);
}
