export default function TodoList({ todos, onDelete, onEdit }) {
  return (
    <div>
      <h2>All Todos</h2>
      {todos.map(todo => (
        <div key={todo._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <strong>{todo.title}</strong> — {todo.status} | {todo.priority}
          <p>{todo.description}</p>
          <small>Due: {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'N/A'}</small><br />
          <button onClick={() => onEdit(todo)}>Edit</button>
          <button onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
