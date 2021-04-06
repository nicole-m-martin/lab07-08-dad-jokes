const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Joke = require('../lib/models/Joke');
const Favorite = require('../lib/models/Favorite');

describe('dad joke routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let joke;
  beforeEach(async () => {
    joke = await Joke.insert({ joke: 'MZoOCQ7wcpb' });
  });

  it('returns jokes from searching the term bird', async () => {
    const res = await request(app).get(`/api/v1/jokes/bird`);

    expect(res.body).toEqual({
      id: expect.any(String),
      joke: expect.any(String),
    });
  });

  it('saves a fave dad joke', async () => {
    const res = await request(app)
      .post(`/api/v1/favorites`)
      .send({ user_name: test, favoriteJoke: 'MZoOCQ7wcpb' });
    expect(res.body).toEqual({
      id: expect.any(String),
      joke: expect.any(String),
    });
  });
});
