const request = require('supertest');
const app = require('./app');

describe('GET /api/weddings', () => {
  it('should return a list of weddings', async () => {
    const response = await request(app).get('/api/weddings');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /api/weddings/:id', () => {
  it('should return a wedding by id', async () => {
    const response = await request(app).get('/api/weddings/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});

describe('POST /api/rsvp', () => {
  it('should create a new rsvp', async () => {
    const response = await request(app).post('/api/rsvp').send({ weddingId: 1, name: 'John Doe', numAttendees: 2, dietaryRestrictions: 'Vegetarian' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});

describe('GET /api/guestbook', () => {
  it('should return a list of guestbook messages', async () => {
    const response = await request(app).get('/api/guestbook?weddingId=1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('POST /api/guestbook', () => {
  it('should create a new guestbook message', async () => {
    const response = await request(app).post('/api/guestbook').send({ weddingId: 1, name: 'John Doe', message: 'Congratulations!', photo: 'https://example.com/photo.jpg' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});

describe('GET /api/photos', () => {
  it('should return a list of photos', async () => {
    const response = await request(app).get('/api/photos?weddingId=1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
