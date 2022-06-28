// import {Driver} from '../src/app/drivers-table/driver/driver.model';
//
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('server/db.json');
// const middlewares = jsonServer.defaults();
// const db = require('./db.json');
// const fs = require('fs');
//
// server.use(middlewares);
// server.use(jsonServer.bodyParser);
//
// server.post('/driver', (req, res, next) => {
//   const drivers = readDrivers();
//
//   const user = drivers.filter(
//     (u: Driver) => u.id === req.body.username && u.password === req.body.password
//   )[0];
//
//   if (user) {
//     res.send({ ...formatUser(user), token: checkIfAdmin(user) });
//   } else {
//     res.status(401).send('Incorrect username or password');
//   }
// });
//
// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running');
// });
//
// function formatUser(driver) {
//   return driver;
// }
//
// function readDrivers() {
//   const dbRaw = fs.readFileSync('./server/db.json');
//   const drivers = JSON.parse(dbRaw).drivers
//   return drivers;
// }
