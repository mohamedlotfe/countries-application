const routes = require('express').Router();
const { messagesRouter } = require("./modules/messages/messages.router");
const { countriesRouter } = require("./modules/countries/countries.router");

// routes.use("/messages", messagesRouter);
routes.use("/countries", countriesRouter);

routes.get('/', (req, res) => {
  res.send("Hello, World!");
});

routes.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

module.exports = routes;