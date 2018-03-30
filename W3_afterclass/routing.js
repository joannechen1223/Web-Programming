const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// local bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// home page
app.get('/', (req, res) => {
  res.status(200).send('<h1>首頁</h1>');
});

// query
app.get('/api/query', (req, res) => {
  res.status(200).json(req.query);
});

// user
app.get('/api/user/:id', (req, res) => {
  const user = {};
  if (req.params.id === '1') {
    user.id = 1;
    user.name = 'Joe';
    user.age = 18;
  } else if (req.params.id === '2') {
    user.id = 2;
    user.name = 'John';
    user.age = 22;
  } else {
    res.status(404).send('Not Found User!');
  }
  res.status(200).json(user);
});

// body parse
app.post('/api/body', (req, res) => {
  res.status(200).json(req.body);
});

// show image
app.use(express.static('public'));

// not found
app.use((req, res) => {
  res.status(404).send('404 Not Found!');
});

// listen port
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
