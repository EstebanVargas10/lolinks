const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Socials
app.get('/Insta', (req, res) => {
  res.sendFile(__dirname + '/pages/Insta.html');
});

// // Config
// app.get('/deploy', (req, res) => {
//   res.sendFile(__dirname + '/pages/deploy.html');
// });
