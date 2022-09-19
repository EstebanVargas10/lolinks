const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Socials

app.get('/playlist', (req, res) => {
  res.sendFile(__dirname + '/pages/playlist.html');
});

app.get('/insta', (req, res) => {
  res.sendFile(__dirname + '/pages/Insta.html');
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
