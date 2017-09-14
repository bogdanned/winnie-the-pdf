'use strict';
import mongoose from 'mongoose'

const Schema = mongoose.Schema

var OfferSchema = new Schema({
  name: {
    type: String,
    required: 'The name of the file created'
  },
  user_id: {
    type: Number,
    required: 'Offers should have an user owner'
  },
  /* Quote Id is not mandatory */
  quote_id: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: [{
      type: String,
      enum: ['Created', 'Edited', 'Deleted']
    }],
    default: ['Created']
  }
});

module.exports = mongoose.model('Offers', Schema);
