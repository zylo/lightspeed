import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Intro } from './pages/Intro.tsx';
import { App } from './pages/App.tsx';
import { Brief } from './pages/Brief.tsx';
import { Planets } from './pages/Planets.tsx';
import { Application } from './pages/Application.tsx';
import { Void } from './pages/Void.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ThemeProvider
              theme={createTheme({
                colorSchemes: { dark: true },
                shape: {
                  borderRadius: 12,
                },
              })}
            >
              <CssBaseline>
                <Outlet />
              </CssBaseline>
            </ThemeProvider>
          }
          path="/"
        >
          <Route element={<Intro />} index />
          <Route element={<App />} path="app">
            <Route element={<Brief />} index />
            <Route element={<Planets />} path="planets" />
            <Route element={<Application />} path="application" />
            <Route element={<Void />} path="*" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
