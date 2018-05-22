import './main.css'
import React from 'react';
import App from './components/App.jsx';

main();

function main() {
    const appDiv = document.createElement( 'div' );

    document.body.appendChild( appDiv );

    React.render( <App />, appDiv );
}