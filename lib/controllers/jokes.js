const { Router } = require('express');
const axios = require('axios')
const Joke = require('../models/Joke');

module.exports = Router()
  .post('/', (req, res, next) => {
    Joke.insert(req.body)
      .then((joke) => res.send(joke))
      .catch(next);
  })

  .get('/:query', (req, res, next) => {
    try {
      const { results } = await axios.get(`https//icanhazdadjoke.com/search?term=${req.params.query}`, {
      headers: {
        'Accept': 'application/json'
      }
    })
  } catch  (err) {

      res.json(results.data.results)
    }
    
  });
