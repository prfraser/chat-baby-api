const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ChatBaby = require('./models/chatbaby');

app.use(bodyParser.json());

app.get('/api/chatbaby', (req, res) => {
	// Send the tasks array to the user
	ChatBaby.find().then((result) => {
		console.log(result)
		res.send(result)
	})
});

app.post('/api/chatbaby', (req, res) => {
	console.log(req.body)
	let message = new ChatBaby ({ name: req.body.name, message: req.body.message })
	message.save((err, task) => {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('Message created');
	  }
	  res.send(message);
	})
})

app.delete('/api/chatbaby/:id', (req, res) => {
	console.log('Attemping to delete message');
	let message = ChatBaby.findById(req.params.id);
	message.remove((err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Message deleted.');
		}
	res.send(204);
	});
});


app.listen(8000, () => console.log('ChatBaby API Server listening on port 8000!'));