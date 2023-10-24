/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { getPublicMessage, getProtectedMessage } = require("./messages.service");
const { checkJwt } = require("../auth0/check-jwt");

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */


messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();
  res.status(200).send(message);
});

messagesRouter.get("/protected", checkJwt, (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});

module.exports = {
  messagesRouter,
};
