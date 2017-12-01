require('dotenv').config()
const mongoose = require('mongoose');
const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds127436.mlab.com:27436/chatbaby`, {useMongoClient:true});
mongoose.Promise = Promise;

module.exports = { mongoose, db };