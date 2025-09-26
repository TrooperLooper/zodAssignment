import { z } from "zod";

const UserSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  age: z.number().int().min(0),
});

/*import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/greet", (req, res) => {
  res.send("Hello, Developer!");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
  ];
  res.json(users);
});

app.use(express.json());

app.post("/submit", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.json({
    message: `Hello ${newUser.name}, you are ${newUser.age} years old.`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, developer!");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];
  res.json(users);
});

app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.json({ message: "User added successfully", user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
