const express = require('express');
const pool = require('../utils/pool');

module.exports = class Joke {
  id;
  joke;

  constructor(row) {
    this.id = row.id;
    this.joke = row.joke;
  }

  static async insert({ joke }) {
    const {
      rows,
    } = await pool.query('INSERT INTO jokes (joke) VALUES ($1) RETURNING *', [
      joke,
    ]);

    return new Joke(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM jokes');

    return rows.map((row) => new Joke(row));
  }
};
