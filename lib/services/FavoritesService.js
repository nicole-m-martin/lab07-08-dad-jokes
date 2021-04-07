const Favorite = require('../models/Favorite.js');
const { getDadJoke } = require('../utils/dadJokeApi.js');

const Joke = require('../models/Joke');

module.exports = class FavoriteService {
  static async create({ userName, favoriteJoke }) {
    const joke = await getDadJoke(favoriteJoke);

    const favorites = await Favorite.insert({
      userName,
      favoriteJoke,
    });

    return favorites;
  }
};
