import { useEffect, useState } from "react";
const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleAddTodo = async () => {
    
    const response = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      // Clear the input fields after successful submission
      setTitle("");
      setDescription("");
    } else {
      console.error("Failed to add todo");
    }
  };
  return (
    <>
      <div>
        <input
        id="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <input
        id="description"
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <button
          //   onClick={useEffect(() => {
          //     fetch("http://localhost:3000/todos").then(async function (res) {
          //       const json = await res.json();
          //       setTodos(json.todos);
          //     });
          //   }, [])}
          // >
          onClick={handleAddTodo}
        >
          Add to Todo
        </button>
      </div>
    </>
  );
};

export default CreateTodo;
