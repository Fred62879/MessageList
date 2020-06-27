db = db.getSiblingDB("message");
db.messages.drop();
db.messages.insertMany([
    {
	"mess": "Hello",
	"username": "Fred"
    },
    {
	"mess": "Hola",
	"username": "Eri"
    }
]);
