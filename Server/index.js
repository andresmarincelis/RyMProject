const express = require('express');
const server = express();
const router = require('./src/routes/index');
const cors = require("cors");
const morgan = require("morgan");

server.use(express.json());

server.use(cors({ origin: true }));

server.use(morgan('dev'))

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use("/rickandmorty", router);

server.listen(3001, () => {
   console.log("port http://localhost:3001")
})

