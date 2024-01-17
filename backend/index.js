  const express = require("express");
  const cors = require("cors");
  const app = express();
  const { createTodo } = require("./types.js");
  const { updateTodo } = require("./types");
  const { todo } = require("./db.js");

  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  


  app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
      res.status(411).json({
        msg: "you have the wrong inputs",
      });
      return;
    }
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({
      msg: "Todo is created",
    });
  });

  app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.json({
      todos,
    });
  });
  app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
      res.status(411).json({
        msg: "You are wrong",
      });
      return;
    }
    await todo.update(
      {
        _id: req.body.id,
      },
      {
        completed: true,
      }
    );
    res.json({
      msg: "your todo is completed",
    });
  });
  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
