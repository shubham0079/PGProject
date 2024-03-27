const mongoose = require('mongoose');

// Define schema and model
const checkboxSchema = new mongoose.Schema({
    gender: String,
    interests: [String]
  // Add more checkboxes as needed
});

const Checkbox = mongoose.model('checkboxes', checkboxSchema);
module.exports = Checkbox
