'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.js';

// Declare the mount node
var mountNode = document.getElementById("root");

// Render the component to the DOM
ReactDOM.render(<App />, mountNode);
