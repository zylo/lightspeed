import { AppBar, Box, Button, Link, Container, Toolbar } from '@mui/material';
import './App.scss';
import { Link as RRLink, Outlet, Navigate } from 'react-router';
import { IconRocket } from '@tabler/icons-react';

export function App() {
  if (localStorage.getItem('journeyStarted') !== 'true') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <AppBar className="app-bar" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link className="app-bar__link" component={RRLink} to=".">
              <IconRocket size={36} />
              <h1 className="app-bar__title">Lightspeed</h1>
            </Link>
            <Box sx={{ display: 'flex', gap: 'calc(1.25rem / 2)' }}>
              <Button color="inherit" component={RRLink} to=".">
                Brief
              </Button>
              <Button color="inherit" component={RRLink} to="planets">
                Planets
              </Button>
              <Button color="inherit" component={RRLink} to="application">
                Application
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container className="app-container" maxWidth="xl">
        <Outlet />
      </Container>
      <footer className="app-footer">
        <img alt="Zylo Logo" className="app-bar__logo" src="/zylo_logo.svg" />
      </footer>
    </>
  );
}
