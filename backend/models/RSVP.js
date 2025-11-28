const { model, Schema } = require('mongoose');
const rsvpSchema = new Schema({
  weddingEventId: { type: Number, required: true },
  guestName: { type: String, required: true },
  attending: { type: Boolean, required: true }
});
module.exports = model('RSVP', rsvpSchema);