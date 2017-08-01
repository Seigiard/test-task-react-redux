const express = require('express');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const app = express();
const basicAuth = require('express-basic-auth');
const MongoClient = require('mongodb').MongoClient;

const argv = require('minimist')(process.argv.slice(2));

const staticUserAuth = basicAuth({
  users: {
    'admin': 'password'
  }
});

MongoClient.connect('mongodb://root:root@ds129593.mlab.com:29593/test-task', (err, database) => {
  if (err) {
    return console.log(err)
  }

  // Set static mode in production mode
  if (argv.env === 'production') {
    app.use(express.static('dist'));
  }

  app.use(function(req, res, next) {
    req.db = database;
    next();
  });

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With, Content-Type, Accept');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });

  app.use(staticUserAuth);

  app.listen(3000, () => {
    console.log('listening on 3000');
  });

  app.get('/auth', (req, res) => {
    res.status(200).send('You passed');
  });

  app.get('/markers', (req, res) => {
    req.db.collection('markers')
      .findOne((err, result) => {
        if (err || result === null) {
          res.json({
            'success': false,
            'error': err,
          });
          return console.log(err);
        }
        res.json(result.markers);
      });
  });

  app.post('/markers', jsonParser, (req, res) => {
    req.db
      .collection('markers')
      .deleteMany({}, () => {
        req.db
          .collection('markers')
          .insert(req.body, (err, result) => {
            if (err) {
              console.log(err);
              res.json({
                'success': false,
                'error': err,
                'length': 0
              });
            }

            res.json({
              'success': true,
              'error': '',
              'length': req.body.markers.length
            });
          });
      });

  });
});
