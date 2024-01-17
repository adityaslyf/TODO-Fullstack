
import { useEffect } from "react";
const CreateTodo = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="title" /><br/>
        <input type="text" placeholder="description" /><br/>
        <button onClick={ useEffect(()=>{
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  } , [])}>Add to Todo</button>
      </div>
    </>
  );
};

export default CreateTodo;