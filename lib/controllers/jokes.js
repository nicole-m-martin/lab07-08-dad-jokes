const { Router } = require('express');
const Joke = require('../models/Joke');

module.exports = Router()
  .post('/', (req, res, next) => {
    Joke.insert(req.body)
      .then((joke) => res.send(joke))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Joke.find()
      .then((jokes) => res.send(jokes))
      .catch(next);
  });
