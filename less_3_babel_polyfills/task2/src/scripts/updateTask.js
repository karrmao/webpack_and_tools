import { renderTasks } from './rendered.js';
import { getItem, setItem } from './storage.js';
import { updateTask } from './tasksGateway.js';
import { getTasksList, deleteTask } from './tasksGateway.js';

export const onListClick = (e) => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  const isCheckBox = e.target.classList.contains('list-item__checkbox');
  const taskId = e.target.dataset.id;

  if (isDeleteBtn) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
  if (isCheckBox) {
    const done = e.target.checked;
    onToggleTask(taskId, done);
  }

  function onToggleTask(taskId, done) {
    const taskslist = getItem('tasksList');
    const { text, createDate } = taskslist.find((task) => task.id === taskId);
    const updatedTask = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };

    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};
