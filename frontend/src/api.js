const BASE_URL = 'http://localhost:5000/api';

export const getTodos = async () => {
  const res = await fetch(`${BASE_URL}/todos`);
  return res.json();
};

export const createTodo = async (todo) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  return res.json();
};

export const updateTodo = async (id, todo) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};
