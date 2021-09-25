const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const request = require('request');
const bodyParser = require('body-parser');
//const axios = require('axios').default;

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cors());

const accounts = [
  {
    id: 1,
    email: 'alibaba@gmail.com',
    password: 'ali'
  },
  {
    id: 2,
    email: 'mateusz.kaniecki@gmail.com',
    password: '123'
  }
];

let actualToken;
const mockApiUrl = 'https://61404fd85cb9280017a1121a.mockapi.io/api/test/users';


app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.put('/users/:id', (req, res) => {
  //request({url: })
  console.log(req.body);
});

app.get('/users', verifyToken, (req, res) => {
  console.log(req.query);
  request({url:'https://61404fd85cb9280017a1121a.mockapi.io/api/test/users', qs:req.query}, (err, response, body) => {
    if(err) { console.log(err); return; }
    res.send(body);
  });
});

app.post('/api/login', (req, res) => {
  const propUser = accounts.find(item => {
    return item.email === req.body.email && item.password === req.body.password;
  });
  if(propUser !== undefined) {
    jwt.sign({user: req.body}, 'secretkey', (err, token) => {
      actualToken = token;
      res.send({token: token});
    });
  } else {
    console.log('niepoprawny użytkownik');
    res.sendStatus(404);
  }
});

app.delete('/api/logout', (req, res) => {
  res.send({logout: 'logout'});
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(bearerHeader.split(' ')[1] != 'null' && bearerHeader.split(' ')[1] == actualToken) {
    const bearerToken = bearerHeader.split(' ')[1];
    jwt.verify(bearerToken, 'secretkey', (err, authData) => {
      if(err) {
        res.sendStatus(401);
      }
    });
    next();
  } else {
    console.log('nie ma tokena!');
    res.sendStatus(401);
  }
}

app.listen(3000, (req, res) => {
  console.log('server starter on port 3000');
});