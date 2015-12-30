import React from 'react';
import { render } from 'react-dom';
import App from './App.js';

const ele = document.getElementById('root');
if (ele) render(<App />, ele);
