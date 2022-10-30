import './list.scss';

const listElem = document.querySelector('.list');

function compareTasks(a, b) {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }

  if (new Date(b.changesDate) < new Date(a.changesDate)) {
    return -1;
  }

  return 0;
}

function createListItem({ text, done, id }) {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.dataset.id = id;

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const listText = document.createElement('span');
  listText.classList.add('list__item-text');
  listText.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('list__item-delete-btn');
  deleteBtn.dataset.id = id;
  deleteBtn.textContent = '+';

  listItemElem.append(checkbox, listText, deleteBtn);

  return listItemElem;
}

export function renderTasks(tasksData) {
  const tasksElems = tasksData.sort(compareTasks).map(createListItem);

  listElem.innerHTML = '';

  listElem.append(...tasksElems);
}
