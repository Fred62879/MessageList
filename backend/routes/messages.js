var express = require('express');
var { uuid } = require('uuidv4');
var router = express.Router();


const ids = ["1", "2"];
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
const idset = Set();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.setHeader('Content-Type', 'application/json');
    // res.send(messages);
    res.status(200).send({
      data: messages
    })
});

router.get('/:messageId', function (req, res, next) {
    const foundMess = messages.find(message => message.id === req.params.messageId);
  res.setHeader('Content-Type', 'application/json');
  res.send(foundMess);
});

router.post('/', function(req, res, next) {
  const newMess = req.body;
  newMess.id = uuid();
  messages.push(newMess);
  res.setHeader('Content-Type', 'application/json');
  res.send(newMess);
});

module.exports = router;
