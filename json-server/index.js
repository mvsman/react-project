const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const PORT = 8000;
const AUTH_ERROR = 'auth error';

// delay imitation
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  next();
});

// eslint-disable-next-line consistent-return
server.use(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: AUTH_ERROR });
  }
  next();
});

server.use(jsonServer.defaults());
server.use(router);

// login endpoint
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const { users } = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8')
  );

  const userFromBd = users.find(
    (user) => user.username === username && user.password === password
  );

  return userFromBd
    ? res.json(userFromBd)
    : res.status(403).json({ message: AUTH_ERROR });
});

server.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});
