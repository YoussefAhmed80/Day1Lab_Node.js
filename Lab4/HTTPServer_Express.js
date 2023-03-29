const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (CSS)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.post('/api/sign-up', (req, res) => {
  const { email, password, username } = req.body;
  const data = { email, password, username };
  const users = readUsers();
  if (users.find(user => user.email === email)) {
    return res.status(400).send('Email already exists');
  }
  users.push(data);
  writeUsers(users);
  res.send('Sign up successful');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).send('Email does not exist, please sign up');
  }
  if (user.password !== password) {
    return res.status(400).send('Wrong password');
  }
  res.redirect(`/profile?name=${user.username}`);
});

app.get('/profile', (req, res) => {
  const { name } = req.query;
  res.send(`Welcome ${name}`);
});

// Helper functions
function readUsers() {
  try {
    const data = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeUsers(users) {
  const data = JSON.stringify(users);
  fs.writeFileSync('users.json', data);
}

// Handle 404 error
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});