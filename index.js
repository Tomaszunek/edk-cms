const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.get(`/api`, async (req, res) => res.status(200).send({ item: 5 }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
