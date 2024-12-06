import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Add from './Add';
import TableExample from './TableExample';
import Marksheet from './Marksheet';
import SI from './SI';
import Prime from './Prime';
import CountVC from './CountVC';
import Area from './Area';
import CheckboxExample from './CheckboxExample';
import DropdownList from './DropdownList';
import ChangebgColor from './ChangebgColor';
import HooksExample from './HooksExample';
import AdditionExample from './AdditionExample';
import MountingExample from './MountingExample';
import ADDProp from './ADDProp';
import LayoutExample from './LayoutExample';
import MemoExample from './MemoExample';
import First from './First';
import HelloClass from './HelloClass';
import HelloClass2 from './HelloClass2';
import { SIUN } from './SIUN';
import Home from './Home';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
var num = {a:100,b:200}
root.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
