const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/chatBaby', {useMongoClient:true});
mongoose.Promise = Promise;

module.exports = { mongoose, db };