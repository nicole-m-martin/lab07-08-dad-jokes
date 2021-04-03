const { static } = require('express');
const pool = require('../utils/pool');

module.exports = class Joke {
  id;
  name;
  joke;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.joke = row.joke;
  }

  static async insert({ name, joke }) {
    const { rows } = await pool.query(
      'INSERT INTO jokes (name, joke) VALUES ($1, $2) RETURNING *'
    );

    return new this.joke(rows[0]);
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM jokes');

    return rows.map((row) => new this.joke(row));
  }
};
