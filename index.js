//good for  testing components
import React from 'react';
import ReactDOM from 'react-dom';

import {HelloReactComponent} from 'react-fj-component';

function run() {
    ReactDOM.render(<HelloReactComponent />, document.getElementById('fr'));
}

window.onload = run;
