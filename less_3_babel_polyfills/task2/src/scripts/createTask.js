import { renderTasks } from './rendered.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createdDate: new Date().toISOString(),
  };
  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

console.log('el');

const arr = [1, 7, 7, 5, 4];
const getSev = (array) => {
  return array.filter((el) => !(el === 7));
};
console.log(getSev(arr));
