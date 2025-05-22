import { useEffect, useState } from 'react';
import { getTodos, createTodo, deleteTodo, updateTodo } from './api';
import TodoForm from './components/TodoForm';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreate = async (todo) => {
    await createTodo(todo);
    fetchTodos();
  };

  const handleUpdate = async (todo) => {
    await updateTodo(editingTodo._id, todo);
    setEditingTodo(null);
    fetchTodos();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTodo(id);
      fetchTodos();
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>📝 Todo Summary Assistant</h1>

      <TodoForm
        onSubmit={editingTodo ? handleUpdate : handleCreate}
        initialData={editingTodo}
        isEditing={!!editingTodo}
      />

      <h2 style={{ marginTop: '40px' }}>📋 All Tasks</h2>

      {todos.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '6px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3>{todo.title}</h3>
            <p><strong>Status:</strong> {todo.status} | <strong>Priority:</strong> {todo.priority}</p>
            {todo.description && <p><strong>Description:</strong> {todo.description}</p>}
            {todo.link && (
              <p>
                <strong>Link:</strong>{' '}
                <a href={todo.link} target="_blank" rel="noreferrer">
                  {todo.link}
                </a>
              </p>
            )}
            <p>
              <strong>Due:</strong> {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'N/A'}{' '}
              | <strong>Start:</strong>{' '}
              {todo.startDate ? new Date(todo.startDate).toLocaleDateString() : 'N/A'}
            </p>
            {todo.estimatedTime && <p><strong>Estimated Time:</strong> {todo.estimatedTime}</p>}
            {todo.reminder && <p><strong>Reminder:</strong> {new Date(todo.reminder).toLocaleString()}</p>}
            {todo.tags?.length > 0 && <p><strong>Tags:</strong> {todo.tags.join(', ')}</p>}
            {todo.category && <p><strong>Category:</strong> {todo.category}</p>}
            {todo.project && <p><strong>Project:</strong> {todo.project}</p>}
            {todo.assignedTo && <p><strong>Assigned To:</strong> {todo.assignedTo}</p>}
            {todo.createdBy && <p><strong>Created By:</strong> {todo.createdBy}</p>}
            {todo.dependencies?.length > 0 && <p><strong>Dependencies:</strong> {todo.dependencies.join(', ')}</p>}
            {todo.subtasks?.length > 0 && (
              <div>
                <strong>Subtasks:</strong>
                <ul>
                  {todo.subtasks.map((sub, index) => (
                    <li key={index}>{sub}</li>
                  ))}
                </ul>
              </div>
            )}
            {todo.comments && <p><strong>Comments:</strong> {todo.comments}</p>}

            <div style={{ marginTop: '10px' }}>
              <button onClick={() => handleEdit(todo)} style={{ marginRight: '10px' }}>
                ✏️ Edit
              </button>
              <button onClick={() => handleDelete(todo._id)}>🗑️ Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
