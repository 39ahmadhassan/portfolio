import React from "react";
import  ReactDOM  from "react-dom";
import App from './App.js';
import './index.css';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
<App/> 
  </BrowserRouter>,document.getElementById("root")
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();
