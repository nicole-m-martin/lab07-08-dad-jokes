const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('dads routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

it('get a joke from search', () => {
  const res = await request(app)
  .get(`/api/v1/jokes/bird`)
  expect(res.body).toEqual(
    // id: expect.any(String),
    // joke: expect.any(String)
})
})
