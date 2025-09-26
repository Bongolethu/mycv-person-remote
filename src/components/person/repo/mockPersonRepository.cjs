const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Mock data
let persons = [
  { id: 1, firstName: 'John Doe', lastName: 'john@example.com', idNumber: '8308014587272', gender: 'male'},
  { id: 2, firstName: 'Jane Doe', lastName: 'jane@example.com', idNumber: '9308014587272', gender: 'female'},
];

// **CRUD Operations**

// 1. Get all users (READ)
app.get('/getAll', (req, res) => {
  res.json(persons);
});

// 2. Get a single user by ID (READ)
app.get('/getAll/:id', (req, res) => {
  const person = persons.find(u => u.id === parseInt(req.params.id));
  if (!person) return res.status(404).send('User not found');
  res.json(person);
});

// 3. Create a new user (CREATE)
app.post('/create', (req, res) => {
  const newPersonInfo = {
    id: persons.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    idNumber: req.body.idNumber,
    age: req.body.age,
  };
  persons.push(newPersonInfo);
  res.status(201).json(newPersonInfo);
});

// 4. Update a user by ID (UPDATE)
app.put('/update/:id', (req, res) => {
  const personInfo = persons.find(u => u.id === parseInt(req.params.id));
  if (!personInfo) return res.status(404).send('User not found');

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
});

// 5. Delete a user by ID (DELETE)
app.delete('/remome/:id', (req, res) => {
  const personInfoIndex = persons.findIndex(u => u.id === parseInt(req.params.id));
  if (personInfoIndex === -1) return res.status(404).send('User not found');

  const deletedPerson = users.splice(personInfoIndex, 1);
  res.json(deletedPerson);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 
