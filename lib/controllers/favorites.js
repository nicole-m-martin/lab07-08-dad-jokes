const { Router } = require('express');
const axios = require('axios');
const Favorite = require('../models/Favorite');
const pool = require('../utils/pool');

// const dad = require('../utils/dadJokeApi');

module.exports = Router().post('/', async (req, res, next) => {
  // Favorite.create(req.body);
  try {
    const { rows } = await pool.query(
      `INSERT INTO favorites 
      (favorite_joke, user_name) 
      VALUES ($1,$2) 
      RETURNING *`,
      [req.body.favoriteJoke, req.body.userName]
    );
    // console.log(response.data.rows[0]);
    res.send(rows[0]);
  } catch (err) {
    next(err);
  }
});
