import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from "./server";
import { PostProvider } from './context/PostContext';
import { AuthProvider, AuthContext } from "./context/AuthContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
export { AuthContext };

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PostProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
