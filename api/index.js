const express = require('express');
const { json, urlencoded } = require('body-parser');
const path = require('path');
const cors = require('cors');

const { endpointNSroute, endpointTSroute } = require('./endpoint');
const db = require('./models');

const app = express();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(
  cors({
    optionsSuccessStatus: 200
  })
);
app.use(
  urlencoded({
    extended: true
  })
);
app.use(json());

app.use('/api-edk-ns', endpointNSroute);
app.use('/api-edk-ts', endpointTSroute);

app.get('/', (req, res) => {
  res.render('home', { sayHelloTo: 'to EDK' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

db.sequelize
  .sync()
  .then(database => {
    const listener = app.listen(PORT, () => {
      console.log(`up and running ${listener.address().port}`);
    });
    return database;
  })
  .catch(err => {
    console.log(err);
  });
