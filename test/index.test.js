const test = require('ava')
const request = require('supertest')

const app = require('../index')

test('base route', t =>
  request(app)
    .get('/')
    .then(res => console.log('res ', res.text) || t.is(res.status, 200)))
