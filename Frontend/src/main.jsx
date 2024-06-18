import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App'; // Ensure the path to App is correct, it might be './App.jsx' depending on your file structure
// import reportWebVitals from './reportWebVitals'; // Include if you're using web vitals
import store from "./Store/ReduxStore"; // Adjust the path to where your Redux store is configured
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('root'); // Identify the root container where the app will be rendered
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Optional: If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
