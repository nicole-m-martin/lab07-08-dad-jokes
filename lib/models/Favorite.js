const express = require('express');
const pool = require('../utils/pool');

module.exports = class Favorite {
  id;
  favoriteJoke;
  userName;

  constructor(row) {
    this.id = row.id;
    this.userName = row.user_name;
    this.favoriteJoke = row.favorite_joke;
  }

  static async insert({ userName, favoriteJoke }) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO favorites (user_name, favorite_joke) VALUES ($1, $2) RETURNING *',
      [user_name, favorite_joke, id]
    );

    return new Favorite(rows[0]);
  }

  // static async find() {
  //   const { rows } = await pool.query('SELECT * FROM favorites');

  //   return rows.map((row) => new Joke(row));
  // }
};
