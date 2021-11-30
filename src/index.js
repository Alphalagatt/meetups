import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MeetupContextProvider } from './components/Contexts/MeetupContext';


ReactDOM.render(
  <MeetupContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </MeetupContextProvider>    
    ,
  document.getElementById('root')
);
