import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderComponent } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderComponent>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProviderComponent>
    </BrowserRouter>
  </React.StrictMode>
);
