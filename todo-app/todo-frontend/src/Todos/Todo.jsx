const Todo = ({ todo }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
      }}
    >
      <span>{todo.text}</span>
      {todo.done ? (
        <span>This todo is done</span>
      ) : (
        <span>This todo is note done</span>
      )}
    </div>
  )
}

export default Todo
