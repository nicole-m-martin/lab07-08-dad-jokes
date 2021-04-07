const axios = require('axios');
const { Router } = require('express');
const Joke = require('../models/Joke');

module.exports = Router()
  // .post('/', (req, res, next) => {
  //   Joke.create(req.body)
  //     .then((joke) => res.send(joke))
  //     .catch(next);
  // })

  .get('/:query', async (req, res, next) => {
    try {
      // console.log(req.params.query);
      const response = await axios.get(
        `https://icanhazdadjoke.com/search?term=${req.params.query}`,
        {
          headers: {
            // prettier-ignore
            'Accept': 'application/json',
          },
        }
      );
      const newJoke = await Joke.insert(response.data.results[1]);
      res.json(newJoke);
    } catch (err) {
      next(err);
    }
  });
