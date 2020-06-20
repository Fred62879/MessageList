import { combineReducers } from 'redux';
import React  from 'react';

const pageReducer = (page = 0, action) => {
    if (action.type === 'PAGE_SELECT')
	return action.cho;
    return page;
};

// let messages = JSON.stringify({ messages: [ "Hi there!", "Hi"] });
/*
let  mongo = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

mongo.connect(url, function(err, db) {
  if (err) throw err;
  let dbo = db.db("mydb");
  dbo.createCollection("messages", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

db = db.getSiblingDB("video");
db.messages.drop();
db.messages.insertMany([
    {
	"mess": "Hi there!",
	"date": "2020-06-01"
    },
    {
	"mess": "Hola!",
	"date": "2020-06-09"
    }
]);
*/

const inputReducer = (input = 'Your message comes here!', action) => {
    if (action.type === 'MESS_INPUT') {
        return action.input;
    }
    return input;
};

const listyle = {
    'font-size': '1em',
    float: 'left',
    margin: '0 0',
    'text-decoration': 'none',
};

const unstyle = {
    'font-size': '1em',
    float: 'left',
    margin: '0 1em',
    'text-decoration': 'none',
    // width: '25%',
    // float: 'right'
}

// const jcontents = JSON.parse(messages).messages;
 const jcontents = [
    {
	"mess": "Hello",
	"username": "Fred",
    },
    {
	"mess": "Hola",
	"username": "Eric"
    }
];
const licontents = jcontents.map((c) =>
//const licontents = db.messages.find.map((c) =>
				 <div id='a'>
				 <li>
				 <div style={listyle}>{c.mess}</div>
				 <div style={unstyle}><i>--by {c.username}</i></div>
				 </li>
				 <br></br>
				 </div>);

const storeReducer = (contents = licontents, action) => {
    switch (action.type) {
    case 'MESS_ADD':
	const newli = (<div id={action.newmess}><li><div style={listyle}>{action.newmess}</div><div style={unstyle}><i>--by {action.username}</i></div></li><br></br></div>);
	return [...contents, newli];
    case 'MESS_CLEAR':
	return [];
    default:
	return contents;
    }
};

const displayReducer = (displayCho = 0, action) => {
    if (action.type === 'MESS_DISPLAY')
	return action.displayCho;
    return displayCho
};

const clearReducer = (clearCho = 0, action) => {
    if (action.type === 'MESS_CLEAR')
	if (action.clear === 1) return [];
    return jcontents;
}

const zoomReducer = (detail = '', action) => {
    if (action.type === 'DETAIL_VIEW')
	return action.content;
    return detail;
}

const loginReducer = (username = 'fred', action) => {
    if (action.type === 'Login')
	return action.username; // change in future
    return username;
}

export default combineReducers({
    page: pageReducer,
    input: inputReducer,
    contents: storeReducer,
    displayCho: displayReducer,
    clearCho: clearReducer,
    detail: zoomReducer,
    username: loginReducer
});
