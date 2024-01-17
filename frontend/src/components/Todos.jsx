

const Todos = ({todos}) => {
 
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <button>
            {todo.completed == true ? "Completed" : "Mark as done"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
