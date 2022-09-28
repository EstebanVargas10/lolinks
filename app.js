const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Songs

app.get('/KARMA', (req, res) => {
  res.sendFile(__dirname + '/pages/KARMA.html');
});

app.get('/KARMAPreSave', (req, res) => {
  res.sendFile(__dirname + '/pages/KARMAPreSave.html');
});

// Socials

app.get('/spotify', (req, res) => {
  res.sendFile(__dirname + '/pages/spotify.html');
});

app.get('/apple', (req, res) => {
  res.sendFile(__dirname + '/pages/apple.html');
});

app.get('/insta', (req, res) => {
  res.sendFile(__dirname + '/pages/insta.html');
});

app.get('/instagram', (req, res) => {
  res.sendFile(__dirname + '/pages/insta.html');
});

app.get('/tiktok', (req, res) => {
  res.sendFile(__dirname + '/pages/tiktok.html');
});

app.get('/youtube', (req, res) => {
  res.sendFile(__dirname + '/pages/youtube.html');
});

// // Config
// app.get('/deploy', (req, res) => {
//   res.sendFile(__dirname + '/pages/deploy.html');
// });
