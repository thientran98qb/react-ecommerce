import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/login';
import MainLayout from './components/layouts/MainLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route
            path='/products'
            element={<App />}
          />
          <Route
            path="login"
            element={<LoginPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
