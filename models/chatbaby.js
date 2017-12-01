const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const ChatBaby = db.model('ChatBaby', { 
	name: { type: String },
	message: { type: String }
});

module.exports = ChatBaby;