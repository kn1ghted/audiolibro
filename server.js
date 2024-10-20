const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Add a prefix to all routes under /api
const ghRouter = express.Router();

// use static files
app.use(express.static(__dirname + '/public'));
// Serve static files from 'pages' directories
app.use(express.static(__dirname + '/public/pages/'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Example routes under the /api prefix
ghRouter.get('/example/:number', (req, res) => {
  const exampleNumber = req.params.number;
  const filePath = path.join(__dirname, '/public/pages/', `example-${exampleNumber}.html`);
});

// Prefixing the routes using app.use()
app.use('https://kn1ghted.github.io/audiolibro/', ghRouter);

// Define a route to catch URLs like /example/1, /example/2, etc.
app.get('/example/:number', (req, res) => {
  const exampleNumber = req.params.number;
  const filePath = path.join(__dirname, '/public/pages/', `example-${exampleNumber}.html`);

  // Send the corresponding HTML file
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found this");
      console.log(err);
    }
  });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);