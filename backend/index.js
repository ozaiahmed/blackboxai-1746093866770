const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data stores for demonstration
let users = [];
let posts = [];
let messages = [];
let notifications = [];

// User profile routes
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

// Feed routes
app.get('/api/feed', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json(post);
});

// Messaging routes
app.get('/api/messages/:userId', (req, res) => {
  const userMessages = messages.filter(m => m.to === req.params.userId || m.from === req.params.userId);
  res.json(userMessages);
});

app.post('/api/messages', (req, res) => {
  const message = req.body;
  messages.push(message);
  res.status(201).json(message);
});

// Notifications routes
app.get('/api/notifications/:userId', (req, res) => {
  const userNotifications = notifications.filter(n => n.userId === req.params.userId);
  res.json(userNotifications);
});

app.post('/api/notifications', (req, res) => {
  const notification = req.body;
  notifications.push(notification);
  res.status(201).json(notification);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
