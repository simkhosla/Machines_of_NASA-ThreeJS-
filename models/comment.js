var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  Name: String,
  Comment: String,
  Owner: String
});

module.exports = mongoose.model('Comment',CommentSchema);
