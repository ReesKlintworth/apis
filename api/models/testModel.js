'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Tests', TestSchema);