const { Router } = require('express');
const axios = require('axios');
const Favorite = require('../models/Favorite');

// const dad = require('../utils/dadJokeApi');

module.exports = Router().post('/favorites', async (req, res, next) => {
  Favorite.create(req.body);
  try {
    const response = await axios.post(
      `https://icanhazdadjoke.com/${req.data.id}`,
      { headers: { Accept: 'application/json' } }
    );
    console.log(response.data.results);
    res.json(response.data.results[1]);
  } catch (err) {
    next(err);
  }
});
