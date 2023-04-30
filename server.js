const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('My Name is Osama');
});

app.get('/about/bio', (req, res) => {
    res.send('I Study in FUUAST');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});