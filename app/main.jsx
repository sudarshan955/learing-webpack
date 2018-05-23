//import './main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

main();

function main() {
    const appDiv = document.createElement( 'div' );

    document.body.appendChild( appDiv );

    ReactDOM.render( <App />, appDiv );
}