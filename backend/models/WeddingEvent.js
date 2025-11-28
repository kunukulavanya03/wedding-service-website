const { model, Schema } = require('mongoose');
const weddingEventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  guestList: { type: String, required: true }
});
module.exports = model('WeddingEvent', weddingEventSchema);