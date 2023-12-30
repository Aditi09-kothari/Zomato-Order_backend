// __tests__/api.test.js

const request = require('supertest');
const assert = require('assert');
const app = require('../index');

describe('API Tests', () => {
  it('should retrieve orders with default pagination', async () => {
    const response = await request(app)
      .get('/api/orders')
      .expect(200);

    assert.strictEqual(response.body.status, 200);
    assert.ok(Array.isArray(response.body.data));
    assert.ok(response.body.data.length > 0);
    assert.strictEqual(typeof response.body.totalRecords, 'number');
    assert.strictEqual(typeof response.body.offset, 'number');
    assert.strictEqual(typeof response.body.limit, 'number');
  });

  it('should retrieve orders with custom pagination', async () => {
    const response = await request(app)
      .get('/api/orders?offset=5&limit=15')
      .expect(200);

    assert.strictEqual(response.body.status, 200);
    assert.ok(Array.isArray(response.body.data));
    assert.ok(response.body.data.length > 0);
    assert.strictEqual(typeof response.body.totalRecords, 'number');
    assert.strictEqual(response.body.offset, 5);
    assert.strictEqual(response.body.limit, 15);
  });
});


