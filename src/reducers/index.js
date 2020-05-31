import { combineReducers } from 'redux';
import React  from 'react';

const pageReducer = (page = 0, action) => {
    if (action.type === 'PAGE_SELECT')
	return action.cho;
    return page;
};

let messages = JSON.stringify({ messages: [ "Hi there!", "Hi"] });
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
    'text-decoration': 'none'
};

const jcontents = JSON.parse(messages).messages;
    const licontents = jcontents.map((c) =>
				     <div id='a'>
				     <li><div style={listyle}>{c}
				     </div></li>
				     <br></br>
				     </div>);

const storeReducer = (contents = licontents, action) => {
    switch (action.type) {
    case 'MESS_ADD':
	const newli = (<div id={action.newmess}><li><div style={listyle}>{action.newmess}</div></li><br></br></div>);
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

export default combineReducers({
    page: pageReducer,
    input: inputReducer,
    contents: storeReducer,
    displayCho: displayReducer,
    clearCho: clearReducer,
    detail: zoomReducer
});
