import express, { request, response } from "express";
import { z } from "zod";

const app = express();

const PORT = 3000;

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get("/random-person", async (req, res) => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const fullName = `${data.results[0].name.first} ${data.results[0].name.last}`;
    const country = data.results[0].location.country;
    const person = { fullName, country };
    const validatePerson = personSchema.safeParse(person);

    if (!validatePerson.success) {
      res
        .status(400)
        .json({ error: "Invalid person data", details: validatePerson.error });
    } else {
      // If valid, send the person
      res.json(validatePerson.data);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const personSchema = z.object({
  fullName: z.string(),
  country: z.string(),
});

/*

const personSchema = z.object({
  id: z.number().int().positive(),
  firstName: z.string().min(1),
  lastName: z.string().min(1).optional(),
  country: z.string().optional(),
});

const validatePerson = personSchema.safeParse(person);

if (!validatePerson.success) {
  console.error(validatePerson.error);
} else {
  console.log("Valid person:", validatePerson.data);
}

const PORT = 3000;

app.get("/random-person", (req, res) => {
   const randomIndex = Math.floor(Math.random() * 3);
   const person = [
     { id: 1, firstName: "Pelle", lastName: "Andersson", country: "Sweden" },
     { id: 2, firstName: "Jens", lastName: "Nielsen", country: "Denmark" },
     { id: 3, firstName: "Anna", lastName: "Hansen", country: "Norway" },
   ];
   res.json(person[randomIndex]);
});

app.post

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


/*
const person = { id: 1, firstName: 'Pelle', age: 28 };

import express from "express";

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
