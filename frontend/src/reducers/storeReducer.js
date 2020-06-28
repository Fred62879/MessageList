import at from '../constants/actionType'
import React from 'react';
import MIL from '../components/presentation/MessageItemListing';
// import idata from './initData';

const unstyle = {
// export default unstyle {
    'font-size': '1em',
    float: 'left',
    margin: '0 1em',
    'text-decoration': 'none',
    // width: '25%',
    // float: 'right'
}

const listyle = {
// export default listyle {
    'font-size': '1em',
    float: 'left',
    margin: '0 0',
    'text-decoration': 'none',
};

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

const licontents = jcontents.map((message) =>
				 <MIL mess={message.mess} username={message.username} />);
				 
const storeReducer = (contents = jcontents, action) => {
    switch (action.type) {
    case at.MESS_ADD:
	const newm = { mess: action.newmess, username: action.username };
	return [...contents, newm];
    case at.MESS_CLEAR:
	return [];
    default:
	return contents;
    }
};

export default storeReducer;
