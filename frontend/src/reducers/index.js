import { combineReducers } from 'redux';
import React  from 'react';


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

export default combineReducers({
    page: pageReducer,
    input: inputReducer,
    contents: storeReducer,
    displayCho: displayReducer,
    clearCho: clearReducer,
    detail: zoomReducer,
    username: loginReducer
});
*/
