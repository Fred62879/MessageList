var express = require('express');
var { uuid } = require('uuidv4');
var router = express.Router();

 const messages = [
     {
	 "id": "1",
	 "mess": "Hello",
	 "username": "Fred",
    },
     {
	 "id": "2",
	 "mess": "Hola",
	 "username": "Eric"
    }
 ];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(messages);
});

router.get('/:messageId', function (req, res, next) {
    const foundUser = messages.find(message => message.id === req.params.userId);
  res.setHeader('Content-Type', 'application/json');
  res.send(foundMess);
});

router.post('/', function(req, res, next) {
  const newMess = req.body;
  newUser.id = uuid();
  messages.push(newMess);
  res.setHeader('Content-Type', 'application/json');
  res.send(newMess);
});

module.exports = router;
