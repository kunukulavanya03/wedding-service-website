const express = require('express');
const router = express.Router();
const RSVP = require('../models/RSVP');

router.post('/', async (req, res) => {
  const { weddingEventId, guestName, attending } = req.body;
  const rsvp = new RSVP({ weddingEventId, guestName, attending });
  await rsvp.save();
  res.send(rsvp);
});

router.get('/', async (req, res) => {
  const weddingEventId = req.query.weddingEventId;
  const rsvps = await RSVP.find({ weddingEventId });
  res.send(rsvps);
});

module.exports = router;