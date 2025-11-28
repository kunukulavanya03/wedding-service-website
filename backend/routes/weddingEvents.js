const express = require('express');
const router = express.Router();
const WeddingEvent = require('../models/WeddingEvent');

router.post('/', async (req, res) => {
  const { title, date, time, location, guestList } = req.body;
  const weddingEvent = new WeddingEvent({ title, date, time, location, guestList });
  await weddingEvent.save();
  res.send(weddingEvent);
});

router.get('/', async (req, res) => {
  const weddingEvents = await WeddingEvent.find();
  res.send(weddingEvents);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const weddingEvent = await WeddingEvent.findById(id);
  if (!weddingEvent) return res.status(404).send('Wedding event not found');
  res.send(weddingEvent);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { title, date, time, location, guestList } = req.body;
  const weddingEvent = await WeddingEvent.findById(id);
  if (!weddingEvent) return res.status(404).send('Wedding event not found');
  weddingEvent.title = title;
  weddingEvent.date = date;
  weddingEvent.time = time;
  weddingEvent.location = location;
  weddingEvent.guestList = guestList;
  await weddingEvent.save();
  res.send(weddingEvent);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await WeddingEvent.findByIdAndDelete(id);
  res.send('Wedding event deleted successfully');
});

module.exports = router;