const axios = require('axios');
const { Router } = require('express');
const Joke = require('../models/Joke');

module.exports = Router()
  // .post('/', (req, res, next) => {
  //   Joke.create(req.body)
  //     .then((joke) => res.send(joke))
  //     .catch(next);
  // })

  .get('api/v1/:query', async (req, res, next) => {
    try {
      const response = await axios.get(
        `https://icanhazdadjoke.com/search?term=${req.params.query}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      res.json(response.data.results[1]);
    } catch (err) {
      next(err);
    }
  });
