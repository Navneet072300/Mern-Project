const { Schema, model } = require("mongoose");

const contactSchem = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = new model("Contact", contactSchem);

module.exports = Contact;
