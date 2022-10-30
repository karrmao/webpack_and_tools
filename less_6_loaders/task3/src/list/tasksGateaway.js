const baseUrl = 'https://62d6363215ad24cbf2d27434.mockapi.io/api/v1/tasks/';

export const getTasksList = () => fetch(baseUrl).then(response => response.json());

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(taskData),
  });

export const updateTask = (id, taskData) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(taskData),
  });

export const deleteTask = id =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
